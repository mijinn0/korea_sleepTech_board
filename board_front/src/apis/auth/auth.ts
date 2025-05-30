//# === AUTH === //

import { SignUpRequestDto } from "@/dtos/request/auth/sign-up.request.dto";
import { ResponseDto } from "@/dtos/response";
import { SignUpResponseDto } from "@/dtos/response/auth/sign-up.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { SIGN_IN_URL, SIGN_UP_URL } from "../constants";
import { AxiosError } from "axios";
import { SignInRequestDto } from "@/dtos/request/auth/sign-in.request.dto";
import SignInResponseDto from "@/dtos/response/auth/sign-in.response.dto";

// apis/auth.ts
export const signUpRequest = async (dto: SignUpRequestDto): Promise<ResponseDto<SignUpResponseDto>> => {
  try {
    const response = await axiosInstance.post(SIGN_UP_URL, dto);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const signInRequest = async (dto: SignInRequestDto): Promise<ResponseDto<SignInResponseDto>> => {
  try {
    const response = await axiosInstance.post(SIGN_IN_URL, dto);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}