# frozen_string_literal: true

module Types
  class UserInputType < Types::BaseInputObject
    argument :name, String, required: false
    argument :email, String, required: false
    argument :password, String, required: false
  end

  class UserCredentialsInputType < Types::BaseInputObject
    argument :email, String, required: false
    argument :password, String, required: false
  end

  class UserUpdateInputType < Types::BaseInputObject
    argument :email, String, required: false
    argument :name, String, required: false
  end
end
