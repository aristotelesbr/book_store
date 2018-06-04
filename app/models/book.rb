# frozen_string_literal: true

# Book model
class Book < ApplicationRecord
  # Pagination
  paginates_per 5
  # Relationships
  belongs_to :user
end
