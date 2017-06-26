class SendEmailJob < ApplicationJob
  queue_as :default

  def perform course, email_content, status
    RegistrationCoursesMailer.send_result_register_course(course, email_content, status)
      .deliver_later
  end
end
