import * as React from "react"

import {Button, buttonVariants} from "@/Primitives/Button/Button"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/Primitives/Card"
import {useAuth, useOrganization, useUser} from "@clerk/clerk-react";
import VarifyLogo from "@/Assets/varify.png";
import {Link} from "@tanstack/react-router";
import {cn} from "@/Lib/utils";


export function VarifyCard() {
    const {has} = useAuth();
    const {user} = useUser();
    const {organization} = useOrganization();
    return (
        <Card className="w-[250px] ">
            <CardHeader className={'space-y-4'}>
                <div className="w-16 h-16 flex justify-center items-center overflow-hidden">
                    <img alt="" src={VarifyLogo} className="max-w-full max-h-full"/>
                </div>
                <CardTitle>Varify</CardTitle>
                <CardDescription>{""}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end space-x-2">
                <Link className={cn(buttonVariants({variant: "default"}))} to={'/varify-more-info'}>More Info</Link>
                {organization?.publicMetadata.varify_access === true && (
                    <div>
                        {user?.publicMetadata?.['varify_role'] === "ADMIN" && (
                            <Button onClick={() => window.open('https://varify.synex.one/dashboard')}>Open</Button>
                        )}
                        {/*Check the user is also on a mobile device*/}
                        {user?.publicMetadata?.['varify_role'] === "MEMBER" && window.navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) && (
                            <Button>
                                <a href={"synex-varify://"}>
                                    Open App
                                </a>
                            </Button>
                        )}
                    </div>
                )}
            </CardFooter>
        </Card>
    )
}
