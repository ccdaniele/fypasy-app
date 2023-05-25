## For CSV

# require 'smarter_csv' 

# file='../barkito_server/db/lic_db.csv'

# options = {}
# SmarterCSV.process(file, options) do |chunk|
#   chunk.each do |data_hash|
#     Vendor.create!( data_hash )
#   end
# end


## For Faker

require 'faker'


5.times do 
    User.create(username:Faker::Name.unique.name, email:Faker::Internet.email, password:"12345")
end

10.times do 
    Project.create(name:Faker::Hobby, time: 67, budget:Faker::Number.within(range: 10..1000))
end

20.times do 
    Task.create(name:Faker::ElectricalComponents.electromechanical, time:Faker::Date, cost:Faker::Number.within(range: 1..500))
end

30.times do 
    Resource.create(name:Faker::Hobby, price:Faker::Number.within(range: 1..500), source:Faker::Internet.domain_name)
end

20.times do 
    Tag.create(name:Faker::ElectricalComponents.active)
end

10.times do 
    UserProject.create(user_id:Faker::Number.within(range: 1..5), project_id:Faker::Number.within(range: 1..10))
end


10.times do 
    UserResource.create(user_id:Faker::Number.within(range: 1..5), resource_id:Faker::Number.within(range: 1..15))
end

10.times do 
    UserTask.create(user_id:Faker::Number.within(range: 1..5), task_id:Faker::Number.within(range: 1..15))
end

10.times do 
    ProjectTask.create(project_id:Faker::Number.within(range: 1..10), task_id:Faker::Number.within(range: 1..10))
end

10.times do 
    ProjectResource.create(project_id:Faker::Number.within(range: 1..10), resource_id:Faker::Number.within(range: 1..10))
end

10.times do 
    ProjectTag.create(project_id:Faker::Number.within(range: 1..10), tag_id:Faker::Number.within(range: 1..10))
end

10.times do 
    TaskResource.create(resource_id:Faker::Number.within(range: 1..10), task_id:Faker::Number.within(range: 1..10))
end

10.times do 
    TaskTag.create(tag_id:Faker::Number.within(range: 1..10), task_id:Faker::Number.within(range: 1..10))
end

10.times do 
    ResourceTag.create(resource_id:Faker::Number.within(range: 1..10), tag_id:Faker::Number.within(range: 1..10))
end