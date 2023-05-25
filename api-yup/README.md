# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Starting rails project: 

rails new api-yup rails-jwt --api --database=postgresql           

Rails generators: 

OBJECTS TABLES

rails g scaffold User username:string email:string password:string password_digest:string 

rails g scaffold Project name:string time:integer budget:integer starting_at:timestamp 

rails g scaffold Task name:string time:integer cost:integer

rails g scaffold Resource name:string price:integer source:string status:string

rails g scaffold Tag name:string


JOINING TABLES

rails g scaffold User_Project user_id:integer project_id:integer

rails g scaffold User_Task user_id:integer task_id:integer

rails g scaffold User_Resource user_id:integer resource_id:integer

rails g scaffold Project_Task project_id:integer task_id:integer

rails g scaffold Project_Resource project_id:integer resource_id:integer

rails g scaffold Project_Tag project_id:integer tag_id:integer

rails g scaffold Task_Resource task_id:integer resource_id:integer

rails g scaffold Task_Tag task_id:integer tag_id:integer

rails g scaffold Resource_Tag resource_id:integer tag_id:integer

serializer: 

rails generate serializer user username email password password_digest

rails generate serializer project name time budget

rails generate serializer task name time cost

rails generate serializer resource name price source status

rails generate serializer tag name

rails generate serializer user_project user_id project_id 

rails generate serializer user_task user_id task_id

rails generate serializer user_resource resource_id user_id

rails generate serializer project_task project_id task_id

rails generate serializer project_resource project_id resource_id

rails generate serializer project_tag project_id tag_id

rails generate serializer task_resource resource_id task_id

rails generate serializer task_tag task_id tag_id

rails generate serializer resource_tag resource_id tag_id