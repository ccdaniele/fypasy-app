class Project < ApplicationRecord
    
    has_and_belongs_to_many :users
    has_and_belongs_to_many :tasks
    has_and_belongs_to_many :resources
    has_and_belongs_to_many :tags

end
