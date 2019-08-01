class Api::V1::RegionsController < ApplicationController
  def index
    render json: Region.all
  end
end
