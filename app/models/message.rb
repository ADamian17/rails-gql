class Message < ApplicationRecord
  belongs_to :user, optional: true # Prevent ActiveRecord::RecordInvalid

  validates :body, presence: true
end
