import {SignUp} from "@clerk/clerk-react";
import React from "react";
import Logo from "@/Assets/synex1.png";

export default function SignUpPage() {
    return (
        <div className={'h-screen flex flex-col items-center justify-center'}>
            <img src={Logo} alt={'Synex Logo'} className={'h-24'}/>
            <div className={'flex flex-col justify-center items-center space-y-4 w-1/2'}>
                <h1 className={'text-black text-3xl font-bold justify-center'}>Create Your Synex Account</h1>
                <h2 className={'text-center font-semibold pb-12'}>
                    Your synex account is used to manage your subscriptions to Synex tools, Manage your organization
                    and/or join other organizations</h2>
            </div>
            <SignUp afterSignUpUrl={'/create-organisation'}/>
        </div>
    )
}
