import * as z from "zod";
import {InferType} from "prop-types";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormField} from "@/Primitives/Form";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import {Input} from "@/Primitives/Input";
import React from "react";
import {ResetPasswordStates} from "@/Pages/PasswordResetPage/PasswordResetPage";
import {useMutation} from "@apollo/client";
import {getOTP} from "@/Services/authService";


const enterPhoneSchema = z.object({
	email: z.string().email(),
});
export type EnterPhoneNum = InferType<typeof enterPhoneSchema>;

interface EnterPhoneNumberProps {
	setState: (state: ResetPasswordStates) => void
	onSubmit?: (values: EnterPhoneNum) => void
}

export const EnterPhoneNumber = ({setState, onSubmit}: EnterPhoneNumberProps) => {
	const [getOTPMutation] = useMutation(getOTP)
	const form = useForm<EnterPhoneNum>({
		resolver: zodResolver(enterPhoneSchema),
		defaultValues: {
			email: "",
		},
	});

	const handleSubmit = async (values: EnterPhoneNum) => {
		const result = await getOTPMutation({variables: {email: values.email}})
		onSubmit && onSubmit(result)
	};

	return (
		<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
					<div className={'w-full'}>
						<FormField
							control={form.control}
							name="email"
							render={({field}) => (
								<FormInputWrapper label={"Email"}
												  description={"The email associated with your account"}>
									<Input className={'h-10'} {...field} />
								</FormInputWrapper>
							)}
						/>
					</div>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							Get Code
						</button>
					</div>
				</form>
			</Form>
		</div>
	)
}
