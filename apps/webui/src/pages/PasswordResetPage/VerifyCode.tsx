import {FetchResult, useMutation} from "@apollo/client";
import {VerifyOtpMutation} from "../../../../../packages/gql-types";
import {verifyOTP} from "@/Services/authService";
import * as z from "zod";
import {InferType} from "prop-types";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormField} from "@/Primitives/Form";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import {Input} from "@/Primitives/Input";
import React from "react";
import {ResetPasswordStates} from "@/Pages/PasswordResetPage/PasswordResetPage";

interface VerifyOTPProps {
	setState: (state: ResetPasswordStates) => void
	email: string
	phoneNum: string
	onSuccess?: (result: FetchResult<VerifyOtpMutation>) => void
}

export const VerifyOTP = ({setState, email, onSuccess, phoneNum}: VerifyOTPProps) => {
	const [verifyOTPMutation] = useMutation(verifyOTP)

	const verifyCodeSchema = z.object({
		code: z.string().min(4)
	});
	type Code = InferType<typeof verifyCodeSchema>;
	const form = useForm<Code>({
		resolver: zodResolver(verifyCodeSchema),
		defaultValues: {
			code: "",
		},
	});

	const onSubmit = async (values: Code) => {
		const result = await verifyOTPMutation({
			variables: {
				input: {
					email: email,
					code: values.code
				}
			}
		})
		onSuccess && onSuccess(result)
	};

	return (
		<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<h2 className="mt-6 text-center text-sm font-semibold text-gray-900">
				{`We sent a code to the phone number *******${phoneNum.slice(-3)}`}<br/> {`Enter the code below`}
			</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className={'flex space-x-2 w-full justify-between'}>
						<div className={'w-full'}>
							<FormField
								control={form.control}
								name="code"
								render={({field}) => (
									<FormInputWrapper label={"Verification Code"}
													  description={"Enter the code sent to your phone"}>
										<Input
											className={'h-12 text-2xl tracking-widest'} {...field} />
									</FormInputWrapper>
								)}
							/>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							Verify
						</button>
					</div>
				</form>
			</Form>
		</div>
	)
}
