//Async Handler
import ApiError from "./ApiError.js";
export default function asyncHandler(cb){
    return (
            async (req, res, next) => {
            try {
                await cb(req, res, next);
            } catch (err) {
                console.log("ERROR: " + err);
                throw new ApiError(err.message || "Internal Server Error", err.status || 500);
            }
        }
    )
}