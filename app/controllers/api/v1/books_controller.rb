# frozen_string_literal: true

module Api
  module V1
    # BooksController
    class BooksController < ApplicationController
      before_action :set_book, only: [:show]
      def index
        @books = Book.all
        render :json
      end

      def show; end

      def create
        @book = Book.new(book_params)
        if @book.save
          heade :ok
        else
          render json: { errors: @book.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy; end

      private

      def set_book
        @book = Book.find(params[:id])
      end

      def book_params
        params.require(:book).permit(
          :title, :description
        ).merge(user_id: current_user.id)
      end
    end
  end
end
