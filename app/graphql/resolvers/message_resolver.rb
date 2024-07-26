# frozen_string_literal: true

module Resolvers
  class MessageResolver < Resolvers::BaseResolver
    type [Types::MessageType], null: false

    def resolve
      ::Message.all
    end
  end
end
