class CreatePodcasts < ActiveRecord::Migration[7.1]
  def change
    create_table :podcasts do |t|
      t.string :title
      t.string :primary_genre
      t.string :other_genres
      t.integer :track_count
      t.string :content_rating
      t.string :cover_img
      t.string :apple_url

      t.timestamps
    end
  end
end
