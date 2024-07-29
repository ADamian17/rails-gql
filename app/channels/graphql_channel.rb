class GraphqlChannel < ApplicationCable::Channel
  def subscribed
    stream_from "graphql:#{params[:channel]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def execute(data)
    query = data["query"]
    variables = ensure_hash(data["variables"])
    context = {
      current_user: nil,
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
end
