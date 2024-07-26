# frozen_string_literal: true

module Mutations
  class CreateUser < BaseMutation
    description "Create a new user"

    input_object_class Types::UserInputType

    type Types::UserType

    def resolve(name: nil, email: nil, password: nil)
      User.create!(
        name: name,
        email: email,
        password: password
      )

    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
