import Logo from "@/Assets/Logo.png";
import LoginForm from "@/Pages/LoginPage/LoginForm";
import React from "react";
import * as z from "zod";
import {InferType} from "prop-types";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import {Input} from "@/Primitives/Input";
import {FormField, Form} from "@/Primitives/Form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {EnterPhoneNumber} from "@/Pages/PasswordResetPage/EnterPhoneNumber";
import {FetchResult, useMutation} from "@apollo/client";
import {getOTP, verifyOTP} from "@/Services/authService";
import {GetOtpMutation, VerifyOtpMutation} from "../../../../../packages/gql-types";
import {VerifyOTP} from "@/Pages/PasswordResetPage/VerifyCode";
import toast from "react-hot-toast";
import {NewPassword} from "@/Pages/PasswordResetPage/NewPassword";

export enum ResetPasswordStates {
	PHONE_NUMBER,
	OTP,
	NEW_PASSWORD,
}


export default function PasswordResetPage() {
	const [state, setState] = React.useState(ResetPasswordStates.PHONE_NUMBER)
	const [phoneNum, setPhoneNum] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [token, setToken] = React.useState('')
	const handleCodeRequestSuccess = async (result: FetchResult<GetOtpMutation>) => {
		setPhoneNum(result.data?.requestVerificationCode.phone ?? '')
		setEmail(result.data?.requestVerificationCode.email ?? '')
		setState(ResetPasswordStates.OTP)
	}

	const handleVerifySuccess = async (result: FetchResult<VerifyOtpMutation>) => {
		setToken(result.data?.verifyOTP.reset_password_token ?? '')
		setState(ResetPasswordStates.NEW_PASSWORD)
		toast.success(`code verified successfully`)
	}

	return (
		<div className="flex  min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className={'flex justify-center'}>
				<img
					className="h-16 w-auto"
					src={Logo}
					alt="Workflow"
				/>
			</div>
			<div>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Reset your password
				</h2>
			</div>
			{state === ResetPasswordStates.PHONE_NUMBER &&
				<EnterPhoneNumber onSubmit={handleCodeRequestSuccess} setState={setState}/>}
			{state === ResetPasswordStates.OTP &&
				<VerifyOTP onSuccess={handleVerifySuccess} email={email} phoneNum={phoneNum}
						   setState={setState}/>}
			{state === ResetPasswordStates.NEW_PASSWORD && (
				<NewPassword token={token}/>
			)}
		</div>
	)
}


