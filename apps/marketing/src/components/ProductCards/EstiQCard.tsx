import * as React from "react"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/Primitives/Card"
import Logo from "@/Assets/EstiQ.png";
import {Link} from "@tanstack/react-router";
import {cn} from "@/Lib/utils";
import {buttonVariants} from "@/Primitives/Button/Button";
import {useOrganization} from "@clerk/clerk-react";


export function EstiQCard() {
    const {organization} = useOrganization();

    return (
        <Card className="w-[250px] min-h-full flex flex-col justify-between h-auto ">
            <CardHeader className="space-y-4 pb-4">
                <div className="w-16 h-16 flex justify-center items-center overflow-hidden">
                    <img alt="" src={Logo} className="max-w-full max-h-full"/>
                </div>
                <CardTitle>EstiQ</CardTitle>
                <CardDescription>{"A comprehensive project estimation suite"}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto justify-end space-x-2">
                {!organization?.publicMetadata.estiQ_access && (
                    <Link className={cn(buttonVariants({variant: "default"}))} to={'/estiQ-more-info'}>More Info</Link>
                )}
            </CardFooter>
        </Card>
    )
}
