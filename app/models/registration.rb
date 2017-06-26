class Registration < ApplicationRecord
  belongs_to :course

  enum status: {pending: 0, contacted: 1, rejected: 2}, _prefix: true

  VALID_EMAIL_REGEX = /\A([A-Za-z0-9_.]+)@((?:[-a-z0-9]+\.)+[a-z]{2,4})\Z/
  VALID_PHONE_NUMBER_REGEX = /\A\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d/
  validates :name, presence: true,
    length: {maximum: Settings.registrations.max_name_length}
  validates :email, presence: true,
    length: {maximum: Settings.registrations.max_email_length},
    format: {with: VALID_EMAIL_REGEX}
  validates :phone, presence: true,
    length: {maximum: Settings.registrations.max_phone_length},
    format: {with: VALID_PHONE_NUMBER_REGEX}
  validates :address, length:
    {maximum: Settings.registrations.max_address_length}, allow_blank: true
  validates :course_id, presence: true

  delegate :name, to: :course, prefix: true, allow_nil: true
end
