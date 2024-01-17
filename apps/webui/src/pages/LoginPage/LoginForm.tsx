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
import {Button} from "@/Primitives/Button/Button";

export default function LoginForm(){
    const router = useRouter();
    const setTokenState =  useSetRecoilState(tokenState)

    const loginSchema = z.object({
        email: z.string(),
        password: z.string().min(3),
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
                        <Button
                            onClick={form.handleSubmit(onSubmit)}
                            type="submit"
							className="flex w-full justify-center"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
