class User < ApplicationRecord
  has_secure_password

  has_many :links
  has_many :messages

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
end
