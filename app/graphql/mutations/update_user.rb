# frozen_string_literal: true

module Mutations
  class UpdateUser < BaseMutation
    description "Update a user"

    input_object_class Types::UserUpdateInputType

    field :updated_user, Types::UserType, null: true

    def resolve(args)
      user = context[:current_user]

      user.update!(args.to_h)

      { updated_user: user }

    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{user.errors.full_messages.join(', ')}")
    end
  end
end
