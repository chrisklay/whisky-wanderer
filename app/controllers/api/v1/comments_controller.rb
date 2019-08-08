class Api::V1::CommentsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    region = Region.find(params["region_id"])
    render json: region.comments
  end

  def create
    region = Region.find(params["region_id"])
    comment = Comment.new(
      description: comment_params[:description],
    )

    comment.region = region
    comment.user = current_user
    if comment.save
      render json: comment
    else
      render json: {error: "Comment could not be saved."}
    end
  end

  private

  def comment_params
    params.permit(
      :description
    )
  end

end
