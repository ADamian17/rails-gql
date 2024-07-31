# frozen_string_literal: true

module Resolvers
  class UserResolver < Resolvers::BaseResolver
    type Types::UserType, null: false

    def resolve
      context[:current_user]
    end
  end
end
