# frozen_string_literal: true

module Types
  class SubscriptionType < Types::BaseObject
    field :message_added, Types::MessageType, null: false, description: "A message was added"

    def message_added
      object
    end
  end
end
