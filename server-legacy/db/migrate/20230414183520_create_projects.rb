class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.integer :time
      t.integer :budget
      t.timestamp :starting_at

      t.timestamps
    end
  end
end
