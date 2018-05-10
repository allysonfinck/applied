class ApplicationsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Applications.all
    end

    def show
        render json: Applications.find(params["id"])
    end

    def create
        render json: Applications.create(params["application"])
    end

    def delete
        render json: Applications.delete(params["id"])
    end

    def update
        render json: Applications.update(params["id"], params["application"])
    end
end
