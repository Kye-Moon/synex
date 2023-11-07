import React from "react";
// import { graphql } from "@/gql";
import * as z from "zod";
import { InferType } from "prop-types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { FormField, Form } from "@/Primitives/Form";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import { Input } from "@/Primitives/Input";
import { graphql } from "../../../../../packages/gql-types";
import { loginMutation } from "../../services/authService";

const loginSchema = z.object({
	phoneNumber: z.string(),
	password: z.string(),
});
type LoginInput = InferType<typeof loginSchema>;

export default function Login() {
	const form = useForm<LoginInput>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			phoneNumber: "",
			password: "",
		},
	});

	const [login] = useMutation(loginMutation, {
		onCompleted: (data) => {
			toast("Logged in successfully");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const onSubmit = async (values: LoginInput) => {
		console.log(values);
		await login({ variables: { input: values } });
	};

	return (
		<div className="flex  min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				LOGIN
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<div>
							<div className="mt-2">
								<FormField
									control={form.control}
									name="phoneNumber"
									render={({ field }) => (
										<FormInputWrapper label={"Phone number"}>
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
									render={({ field }) => (
										<FormInputWrapper label={"Password"}>
											<Input type={"password"} {...field} />
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
								Sign in
							</button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
