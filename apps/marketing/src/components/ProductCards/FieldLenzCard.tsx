import * as React from "react"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/Primitives/Card"
import Logo from "@/Assets/FieldLens.png";
import {Link} from "@tanstack/react-router";
import {cn} from "@/Lib/utils";
import {buttonVariants} from "@/Primitives/Button/Button";
import {useOrganization} from "@clerk/clerk-react";


export function FieldLenzCard() {
    const {organization} = useOrganization();

    return (
        <Card className="w-[250px] min-h-full flex flex-col justify-between h-auto ">
            <CardHeader className="space-y-4 pb-4">
                <div className="w-16 h-16 flex justify-center items-center overflow-hidden">
                    <img alt="" src={Logo} className="max-w-full max-h-full"/>
                </div>
                <CardTitle>FieldLenz</CardTitle>
                <CardDescription>{"A on site image tool for seamlessly tagging and saving photos with rich metadata"}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end space-x-2">
                {!organization?.publicMetadata.fieldlenz_access && (
                    <Link className={cn(buttonVariants({variant: "default"}))} to={'/fieldLenz-more-info'}>More Info</Link>
                )}
            </CardFooter>
        </Card>
    )
}
