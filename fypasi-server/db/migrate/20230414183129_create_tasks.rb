class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :time
      t.integer :cost

      t.timestamps
    end
  end
end
