import dotenv from 'dotenv'

export function config() {
    //Load env values
    dotenv.config()

    return {
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
        MONGODB_CONNECTION: process.env.MONGODB_CONNECTION,
        PORT_NUMBER: process.env.PORT_NUMBER,
    }
}