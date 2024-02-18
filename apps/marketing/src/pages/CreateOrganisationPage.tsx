import {CreateOrganization} from "@clerk/clerk-react";
import React from "react";
import Logo from "@/Assets/synex1.png";

export default function CreateOrganisationPage() {
    return (
        <div className={'h-screen flex flex-col items-center justify-center'}>
            <img src={Logo} alt={'Synex Logo'} className={'h-24'}/>
            <div className={'flex flex-col justify-center items-center space-y-4 w-1/2'}>
                <h1 className={'text-black text-3xl font-bold justify-center'}>Create and Organisation</h1>
                <h2 className={'text-center font-semibold pb-12'}>
                    Create an organisation if you are a business owner or a team leader. You can invite your team members
                </h2>
            </div>
            <CreateOrganization afterCreateOrganizationUrl={'/dashboard'}/>
            <h2 className={'text-center w-1/2 font-semibold py-12'}>
                Dont need to create an organisation? You wont be able to invite others who work for you to join. <a className={'text-green-500'} href={'/dashboard'}>Skip</a>
            </h2>
        </div>
    )
}
