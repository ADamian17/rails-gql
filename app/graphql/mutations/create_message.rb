# frozen_string_literal: true

module Mutations
  class CreateMessage < BaseMutation
    description "Creates a new message"

    type Types::MessageType

    input_object_class Types::MessageInputType

    def resolve(body: nil)
      ::Message.create!(body: body, user: context[:current_user]).tap do |message|
        SellItUpSchema.subscriptions.trigger(:message_added, {}, message)
      end

    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
