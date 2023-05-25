class Api::V1::ProjectResourcesController < ApplicationController
  before_action :set_project_resource, only: %i[ show update destroy ]

  # GET /project_resources
  def index
    @project_resources = ProjectResource.all

    render json: @project_resources
  end

  # GET /project_resources/1
  def show
    render json: @project_resource
  end

  # POST /project_resources
  def create
    @project_resource = ProjectResource.new(project_resource_params)

    if @project_resource.save
      render json: @project_resource, status: :created, location: @project_resource
    else
      render json: @project_resource.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /project_resources/1
  def update
    if @project_resource.update(project_resource_params)
      render json: @project_resource
    else
      render json: @project_resource.errors, status: :unprocessable_entity
    end
  end

  # DELETE /project_resources/1
  def destroy
    @project_resource.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_resource
      @project_resource = ProjectResource.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_resource_params
      params.require(:project_resource).permit(:project_id, :resource_id)
    end
end
