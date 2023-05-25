require "test_helper"

class ProjectTagsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project_tag = project_tags(:one)
  end

  test "should get index" do
    get project_tags_url, as: :json
    assert_response :success
  end

  test "should create project_tag" do
    assert_difference("ProjectTag.count") do
      post project_tags_url, params: { project_tag: { project_id: @project_tag.project_id, tag_id: @project_tag.tag_id } }, as: :json
    end

    assert_response :created
  end

  test "should show project_tag" do
    get project_tag_url(@project_tag), as: :json
    assert_response :success
  end

  test "should update project_tag" do
    patch project_tag_url(@project_tag), params: { project_tag: { project_id: @project_tag.project_id, tag_id: @project_tag.tag_id } }, as: :json
    assert_response :success
  end

  test "should destroy project_tag" do
    assert_difference("ProjectTag.count", -1) do
      delete project_tag_url(@project_tag), as: :json
    end

    assert_response :no_content
  end
end
