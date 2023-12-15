import * as z from "zod";
import {InferType} from "prop-types";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormField} from "@/Primitives/Form";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import {Input} from "@/Primitives/Input";
import React from "react";
import {useMutation} from "@apollo/client";
import {resetPassword} from "@/Services/authService";
import {useSetRecoilState} from "recoil";
import {tokenState} from "@/State/state";
import toast from "react-hot-toast";
import {useRouter} from "@tanstack/react-router";

interface NewPasswordProps {
	token: string
}

export const NewPassword = ({token}: NewPasswordProps) => {
	const [resetPasswordMutation] = useMutation(resetPassword)
	const setTokenState =  useSetRecoilState(tokenState)
	const router = useRouter();

	const newPasswordSchema = z.object({
		password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"),
	});
	type NewPasswordType = InferType<typeof newPasswordSchema>;
	const form = useForm<NewPasswordType>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: "",
		},
	});

	const onSubmit = async (values: NewPasswordType) => {
		const response = await resetPasswordMutation({
			variables: {
				input: {
					password: values.password,
					token: token
				}
			}
		})
		setTokenState(response.data?.resetPassword.access_token ?? '')
		toast.success('Password reset successfully')
		await router.navigate({to: '/dashboard'})
	};

	return (
		<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className={'flex space-x-2 w-full justify-between'}>
						<div className={'w-full'}>
							<FormField
								control={form.control}
								name="password"
								render={({field}) => (
									<FormInputWrapper label={"New Password"}
													  description={"The phone number associated with your account"}>
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
							Get Code
						</button>
					</div>
				</form>
			</Form>
		</div>
	)
}
