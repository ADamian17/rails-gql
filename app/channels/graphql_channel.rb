class GraphqlChannel < ApplicationCable::Channel
  def subscribed
    p params[:channel]
    stream_from "graphql:#{params[:channel]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def execute(data)
    query = data["query"]
    variables = ensure_hash(data["variables"])
    context = {
      current_user: current_user,
      channel: self
    }
    result = SellItUpSchema.execute(query, variables: variables, context: context)
    transmit(result: result.to_h)
  end

  private

  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      ambiguous_param.present? ? ensure_hash(JSON.parse(ambiguous_param)) : {}
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def current_user
    token = request.headers[:Authorization].to_s.split(' ').last

    return unless token
    decoded_token = JWT.decode(token, 'secret', true, algorithm: 'HS256')
    User.find(decoded_token[0]['user_id'])
  end
end
