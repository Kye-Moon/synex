import * as React from "react"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/Primitives/Card"
import Logo from "@/Assets/EstiQ.png";


export function EstiQCard() {
    return (
        <Card className="w-[250px] h-[250px]">
            <CardHeader className={'space-y-4'}>
                <div className="w-16 h-16 flex justify-center items-center overflow-hidden">
                    <img alt="" src={Logo} className="max-w-full max-h-full"/>
                </div>
                <CardTitle>EstiQ</CardTitle>
                <CardDescription>{"A comprehensive project estimation suite"}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end space-x-2">
                {/*<Link className={cn(buttonVariants({variant: "default"}))} to={'/fieldLenz-more-info'}>More Info</Link>*/}
            </CardFooter>
        </Card>
    )
}
