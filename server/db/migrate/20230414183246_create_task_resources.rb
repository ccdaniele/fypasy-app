class CreateTaskResources < ActiveRecord::Migration[7.0]
  def change
    create_table :task_resources do |t|
      t.integer :task_id
      t.integer :resource_id

      t.timestamps
    end
  end
end
