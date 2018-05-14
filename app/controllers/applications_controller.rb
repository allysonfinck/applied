class ApplicationsController < ApplicationController
    skip_before_action :verify_authenticity_token



    def index
        render json: Application.all
    end

    def show
        render json: Application.find(params["id"])
    end

    def create
        render json: Application.create(params["application"])
    end

    def delete
        render json: Application.delete(params["id"])
    end

    def update
        render json: Application.update(params["id"], params["application"])
    end
end
