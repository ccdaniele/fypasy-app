class ProjectTagSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :tag_id
end
