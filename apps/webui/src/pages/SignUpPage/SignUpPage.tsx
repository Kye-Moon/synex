import React from "react";
// import { graphql } from "@/gql";
import * as z from "zod";
import {InferType} from "prop-types";
import Logo from "@/Assets/Logo.png";
import SignUpForm from "@/Pages/SignUpPage/SignUpForm";

const signUpSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	organisationName: z.string(),
	email: z.string(),
	password: z.string(),
});
type SignUpInput = InferType<typeof signUpSchema>;

export default function Signup() {
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
					Sign up as an organisation
				</h2>
			</div>
			<div className={'w-full flex justify-center'}>
				<h2 className="mt-6 text-center text-lg text-gray-900 w-1/2 justify-center flex">
					If your organisation is already registered, please contact your administrator to
					be added to the organisation.
				</h2>
			</div>
			<SignUpForm/>
			<h2 className="mt-6 text-center text-sm font-semibold text-gray-900">
				Already have an account? <a href={'/login'} className={'text-blue-500'}>Login</a>
			</h2>
		</div>
	);
}
