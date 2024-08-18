class Podcast < ApplicationRecord

    belongs_to :user, optional: true 

    validates :title, :primary_genre, :other_genres, :track_count, :content_rating, :cover_img, :apple_url, presence: true


end
