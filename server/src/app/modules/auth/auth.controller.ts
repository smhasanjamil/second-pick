import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await AuthService.loginUser(user);

  //   send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User is logged in successfully",
    data: result,
  });
});

export const authControllers = {
  loginUser,
};
