class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :addassword, :password_digest
end
