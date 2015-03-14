class ContactRequestsController < ApplicationController

  def new
  end

  def create
    @contact_request = ContactRequest.new(contact_request_params)
  end

  private

  # @private
  def contact_request_params
    new_params = params.require(:contact_request).permit(:first_name, :last_name, :email, :message)
    new_params[:message] = Sanitize.clean(new_params[:message])
    new_params
  end
end
