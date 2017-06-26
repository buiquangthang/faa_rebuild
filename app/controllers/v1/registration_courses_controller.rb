class V1::RegistrationCoursesController < V1::ApiController
  before_action :load_registration_course, only: [:destroy, :update]
  def index
    registrations = Registration.includes(:course).select("registrations.*, courses.name as course_name")
      .references(:course)
    response_success nil, registrations
  end

  def update
    if @registration_course.update_attribute(:status, params[:status])
      SendEmailJob.perform_later @registration_course, params[:email_content], params[:status]
      response_success t(".save_success"), @registration_course
    else
      response_error t(".save_failed"), @registration_course.errors.full_messages
    end    
  end

  def destroy
    if @registration_course.destroy
      response_success t(".delete_success"), @registration_course
    else
      response_error t(".delete_failed"), nil
    end
  end

  private

  def load_registration_course
    return if @registration_course = Registration.find_by(id: params[:id])
    response_not_found t(".not_found"), nil    
  end
end
