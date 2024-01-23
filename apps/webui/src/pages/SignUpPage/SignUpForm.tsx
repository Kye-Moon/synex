import React from "react";
// import { graphql } from "@/gql";
import * as z from "zod";
import {InferType} from "prop-types";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@apollo/client";
import toast from "react-hot-toast";
import {Form, FormField} from "@/Primitives/Form";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import {Input} from "@/Primitives/Input";
import {signupMutation} from "@/Services/authService";
import {useRouter} from "@tanstack/react-router";
import {useSetRecoilState} from "recoil";
import {tokenState} from "@/State/state";
import {Button} from "@/Primitives/Button/Button";
import {formatPhoneNumber} from "@/Lib/utils";

const signUpSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	organisationName: z.string(),
	phone: z.string().min(10, "Please provide a valid phone number"),
	email: z.string(),
	password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}":;'?/<>,.])[a-zA-Z\d!@#$%^&*()_+{}":;'?/<>,.]{8,}$/ , "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"),
});
type SignUpInput = InferType<typeof signUpSchema>;

export default function SignUpForm() {
	const router = useRouter();
	const setTokenState =  useSetRecoilState(tokenState)

	const form = useForm<SignUpInput>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			organisationName: "",
			phone: "",
			email: "",
			password: "",
		},
	});

	const [signup] = useMutation(signupMutation, {
		onCompleted: async (data) => {
			toast("Signed up successfully");
			setTokenState(data.signup.access_token)
			await router.navigate({to: '/dashboard'})
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const onSubmit = async (values: SignUpInput) => {
		values.phone = formatPhoneNumber(values.phone);
		await signup({variables: {input: values}});
	};

	return (
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<div className={'flex space-x-2 w-full justify-between'}>
							<div className="mt-2">
								<FormField
									control={form.control}
									name="firstName"
									render={({field}) => (
										<FormInputWrapper label={"First name"}>
											<Input {...field} />
										</FormInputWrapper>
									)}
								/>
							</div>
							<div className="mt-2">
								<FormField
									control={form.control}
									name="lastName"
									render={({field}) => (
										<FormInputWrapper label={"Last name"}>
											<Input {...field} />
										</FormInputWrapper>
									)}
								/>
							</div>
						</div>
						<div>
							<div className="mt-2">
								<FormField
									control={form.control}
									name="organisationName"
									render={({field}) => (
										<FormInputWrapper label={"Organisation name"}
														  description={"A unique name for your organisation"}>
											<Input {...field} />
										</FormInputWrapper>
									)}
								/>
							</div>
						</div>
						<div>
							<div className="mt-2">
								<FormField
									control={form.control}
									name="email"
									render={({field}) => (
										<FormInputWrapper label={"Work email"}>
											<Input {...field} />
										</FormInputWrapper>
									)}
								/>
							</div>
						</div>
						<div>
							<div className="mt-2">
								<FormField
									control={form.control}
									name="phone"
									render={({field}) => (
										<FormInputWrapper label={"Phone Number"} description={"Required for SMS verification"}>
											<Input {...field} />
										</FormInputWrapper>
									)}
								/>
							</div>
						</div>
						<div>
							<div className="mt-2">
								<FormField
									control={form.control}
									name="password"
									render={({field}) => (
										<FormInputWrapper label={"Your password"}
														  description={"Min 8 Characters"}>
											<Input type={"password"} {...field} />
										</FormInputWrapper>
									)}
								/>
							</div>
						</div>
						<div>
							<Button
								type="submit"
								className="flex w-full justify-center"
							>
								Next
							</Button>
						</div>
					</form>
				</Form>
		</div>
	);
}
