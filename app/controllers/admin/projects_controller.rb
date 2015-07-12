class Admin::ProjectsController < Admin::BaseController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
    3.times{ @project.photos.build }
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      flash.now.notice = 'Your project was successfully added'
      redirect_to admin_projects_path
    else
      flash.now.alert = "Please check your entries and try again"
      render :new
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])

    if @project.update_attributes(project_params)
      flash.now.notice = 'Your project was successfully updated.'
      redirect_to admin_projects_path
    else
      flash.now.alert = "Please check your entries and try again"
      render :edit
    end
  end

  def destroy
    @project = Project.find(params[:id])
  end

  private

  # @private
  def project_params
    new_params = params.require(:project).permit(:name, :display_on_projects_page, :summary, :photos_attributes)
    new_params[:photos_attributes] = params[:project][:photos_attributes]
    new_params
  end
end
