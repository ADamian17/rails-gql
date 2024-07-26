# frozen_string_literal: true

module Mutations
  class SignInUser < BaseMutation
    null true


    field :token, String, null: true
    field :user, Types::UserType, null: true

    input_object_class Types::UserCredentialsInputType

    def resolve(email: nil, password: nil)
      return unless email && password

      user = User.find_by email: email

      return unless user

      if user&.authenticate(password)
        token = JWT.encode({ user_id: user.id }, 'secret', 'HS256')
        return { user: user, token: token }
      end

      raise GraphQL::ExecutionError, 'Invalid email or password'
    end
  end
end
