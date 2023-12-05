import {Form, FormField} from "@/Primitives/Form";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import {Input} from "@/Primitives/Input";
import React from "react";
import {useRouter} from "@tanstack/react-router";
import {useSetRecoilState} from "recoil";
import {tokenState} from "@/State/state";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@apollo/client";
import {loginMutation} from "@/Services/authService";
import toast from "react-hot-toast";
import * as z from "zod";
import {InferType} from "prop-types";

export default function LoginForm(){
    const router = useRouter();
    const setTokenState =  useSetRecoilState(tokenState)

    const loginSchema = z.object({
        email: z.string(),
        password: z.string(),
    });
    type LoginInput = InferType<typeof loginSchema>;

    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [login] = useMutation(loginMutation, {
        onCompleted: async (data) => {
            toast("Logged in successfully");
            setTokenState(data.login.access_token)
            await router.navigate({to: '/dashboard'})
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const onSubmit = async (values: LoginInput) => {
        await login({variables: {input: values}});
    };
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div>
                        <div className="mt-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormInputWrapper label={"Email"}>
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
                                    <FormInputWrapper label={"Password"}
                                                      description={"Min 8 Characters"}>
                                        <Input type={"password"} {...field} />
                                    </FormInputWrapper>
                                )}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={form.handleSubmit(onSubmit)}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
