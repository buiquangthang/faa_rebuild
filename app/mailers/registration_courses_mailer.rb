class RegistrationCoursesMailer < ApplicationMailer
  def send_result_register_course course, email_content, status
    @course = course
    @email_content = email_content
    @status = status
    binding.pry
    mail(to: "buiquangthangit@gmail.com", subject: 'Sample Email')
  end
end
