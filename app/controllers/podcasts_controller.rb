class PodcastsController < ApplicationController
      require 'net/http'
      require 'uri'
      
        url = URI('https://itunes.apple.com/search?media=podcast&term=Health&Fitness')
        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true if url.scheme == 'https'
  
        request = Net::HTTP::Get.new(url)
        response = http.request(request)
  
        if response.is_a?(Net::HTTPSuccess)
          parsed_data = JSON.parse(response.body)
            
          parsed_data['results'].each do |data|
          #puts "Processing data: #{data.inspect}"
            Podcast.create(
              title: data['collectionName'],
              primary_genre: data['primaryGenreName'],
              other_genres: data['genres'].join(', '),
              track_count: data['trackCount'].to_i,
              content_rating: data['contentAdvisoryRating'],
              cover_img: data['artworkUrl600'],
              apple_url: data['collectionViewUrl']
            )
           end
        end

      def index
        podcasts = Podcast.all
        render json: podcasts
      end


   

end


