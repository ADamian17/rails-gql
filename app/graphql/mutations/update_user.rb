# frozen_string_literal: true

module Mutations
  class UpdateUser < BaseMutation
    description "Update a user"

    input_object_class Types::UserUpdateInputType

    type Types::UserType, null: true

    def resolve(**args)
      # debugger
      user = context[:current_user]

      user.update!(args)

    rescue
      GraphQL::ExecutionError.new("Invalid input: #{user.errors.full_messages.join(', ')}")
    end
  end
end
