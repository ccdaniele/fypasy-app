require "test_helper"

class ProjectResourcesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project_resource = project_resources(:one)
  end

  test "should get index" do
    get project_resources_url, as: :json
    assert_response :success
  end

  test "should create project_resource" do
    assert_difference("ProjectResource.count") do
      post project_resources_url, params: { project_resource: { project_id: @project_resource.project_id, resource_id: @project_resource.resource_id } }, as: :json
    end

    assert_response :created
  end

  test "should show project_resource" do
    get project_resource_url(@project_resource), as: :json
    assert_response :success
  end

  test "should update project_resource" do
    patch project_resource_url(@project_resource), params: { project_resource: { project_id: @project_resource.project_id, resource_id: @project_resource.resource_id } }, as: :json
    assert_response :success
  end

  test "should destroy project_resource" do
    assert_difference("ProjectResource.count", -1) do
      delete project_resource_url(@project_resource), as: :json
    end

    assert_response :no_content
  end
end
