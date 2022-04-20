class Api::ApplicationController < ApplicationController
    skip_before_action :verify_authenticity_token
    rescue_from StandardError, with: :standard_error

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def not_found
        render(
            json:{
                errors: [
                    {
                        type: "Not Found!"
                    }
                ]
            },
            status: 404
        )
    end
    

    private

    def authenticate_user!
        unless current_user.present?
            render(json:{status: 401})
        end
    end
    
    def record_not_found(error)
        render(
            status:404,
            json:{
                errors:[
                    {
                        type: error.class.to_s,
                        message: error.message,
                        alert:"record not found"
                    }
                ]
            }
        )
    end
    

    def standard_error(error)
        render(
            status: 500,
            json:{
                errors:[
                    {
                        type: error.class.to_s,
                        message: error.message,
                        alert:"standrd error!"
                    }
                ]
            }
        )
    end


    def record_invalid(error)
        invalid_record = error.record
        errors = invalid_record.errors.map do |field, message|
            {
                type: invalid_record.class.to_s,
                message: message,
                field: field
            }
        end
        render(
            json:{errors: errors},
            status:422
        )
    end
end
