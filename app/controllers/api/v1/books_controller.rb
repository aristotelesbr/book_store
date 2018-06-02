# frozen_string_literal: true

module Api
  module V1
    # BooksController
    class BooksController < ApplicationController
      skip_before_action :verify_authenticity_token
      before_action :set_book, only: [:show, :destroy]
      def index
        @books = Book.all
        render json: @books
      end

      def show; end

      def create
        @book = Book.new(book_params)
        if @book.save
          render json: @book
        else
          render json: { errors: @book.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @book.destroy
        head :no_content
      end

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
