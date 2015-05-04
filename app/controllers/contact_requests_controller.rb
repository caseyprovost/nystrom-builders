class ContactRequestsController < ApplicationController

  def new
    @contact_request = ContactRequest.new
  end

  def create
    @contact_request = ContactRequest.new(contact_request_params)

    if @contact_request.save
      flash[:success] = "Your request has been sent, someone will be in contact within 24 hours."
      ContactRequestMailer.send_to_admin(@contact_request.id).deliver
      redirect_to quote_request_path
    else
      flash[:error] = "Please resolve the errors below and try again."
      render :new
    end
  end

  private

  # @private
  def contact_request_params
    new_params = params.require(:contact_request).permit(:first_name, :last_name, :email, :message)
    new_params[:message] = Sanitize.clean(new_params[:message])
    new_params
  end
end
