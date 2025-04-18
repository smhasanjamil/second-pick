import { ErrorRequestHandler } from "express";
import config from "../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    //setting default values
    let statusCode = 500;
    let message = 'Something went wrong!';
    

    // Handle the error response
    res.status(statusCode).json({
        success: false,
        message,
        // errorSources,
        err,
        stack: config.NODE_ENV === 'development' ? err?.stack : null,
    });

    // Do not return anything (ensure this handler does not return a value)
    return;
};

export default globalErrorHandler;