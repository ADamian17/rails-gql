module Mutations
  class AddMessage < BaseMutation
    argument :body, String, required: true

    type Types::MessageType, null: false

    def resolve(body: nil)
      Message.create!(body: body).tap do |message|
        SellItUpSchema.subscriptions.trigger(:message_added, {}, message)
      end
    end
  end
end
