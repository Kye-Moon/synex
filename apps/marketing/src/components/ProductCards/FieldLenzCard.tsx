import * as React from "react"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/Primitives/Card"
import Logo from "@/Assets/FieldLens.png";


export function FieldLenzCard() {
    return (
        <Card className="w-[250px] h-[250px]">
            <CardHeader className={'space-y-4'}>
                <div className="w-16 h-16 flex justify-center items-center overflow-hidden">
                    <img alt="" src={Logo} className="max-w-full max-h-full"/>
                </div>
                <CardTitle>FieldLenz</CardTitle>
                <CardDescription>{"A on site image tool for seamlessly tagging and saving photos with rich metadata"}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end space-x-2">
                {/*<Link className={cn(buttonVariants({variant: "default"}))} to={'/fieldLenz-more-info'}>More Info</Link>*/}

            </CardFooter>
        </Card>
    )
}
