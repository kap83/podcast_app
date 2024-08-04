class PodcastsController < ApplicationController
      require 'net/http'
      require 'uri'

      def index
        uri = URI('https://itunes.apple.com/search')
        params = { :media => 'podcast', :term => 'Health & Fitness' }
        uri.query = URI.encode_www_form(params)

        res = Net::HTTP.get_response(uri)
      puts res.body  if res.is_a?(Net::HTTPSuccess)
            # data = JSON.parse(res.body)
            
        # else
        #     render json: { error: 'Failed to fetch data' }, status: :bad_request
        # end

      end
    


end


#uri = URI('https://itunes.apple.com/search?media=podcast&term=Health & Fitness')