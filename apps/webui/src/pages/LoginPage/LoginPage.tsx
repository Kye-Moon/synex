import React from "react";
import LoginForm from "@/Pages/LoginPage/LoginForm";
import Logo from '@/Assets/Logo.png'

export default function Login() {
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
                    Sign in to your account
                </h2>
            </div>
            <LoginForm/>
        </div>
    );
}
