class Api::V1::RegionsController < ApplicationController
  def index
    render json: Region.all
  end

  def show
    render json: Region.find(params[:id])
  end
end
