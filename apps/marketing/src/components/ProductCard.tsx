import * as React from "react"

import {Button} from "@/Primitives/Button/Button"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/Primitives/Card"
import {useAuth, useUser} from "@clerk/clerk-react";


export enum PRODUCT_NAMES {
    VARIFY = "Varify",
}

interface ProductCardProps {
    productName: string
    productDescription: string
    productImage: string
    productSiteLink: string
    isSubscribed?: boolean
    onSubscribe?: () => void
    appLink?: string
}

export function ProductCard({
                                productName,
                                productDescription,
                                productImage,
                                productSiteLink,
                                isSubscribed,
                                appLink
                            }: ProductCardProps) {
    const {has} = useAuth();
    const {user} = useUser();
    return (
        <Card className="w-[250px] ">
            <CardHeader className={'space-y-4'}>
                <div className="w-16 h-16 flex justify-center items-center overflow-hidden">
                    <img alt="" src={productImage} className="max-w-full max-h-full"/>
                </div>
                <CardTitle>{productName}</CardTitle>
                <CardDescription>{productDescription}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
                <div className={'space-x-2'}>
                    <Button>More Info</Button>
                </div>
                {isSubscribed && (
                    <div className={'space-x-2'}>
                        {user?.publicMetadata?.['varify_role'] === "ADMIN" && (
                            <Button onClick={() => window.open(productSiteLink)}>Open</Button>
                        )}
                        {user?.publicMetadata?.['varify_role'] === "MEMBER" && (
                            <Button>
                                <a href={appLink}>
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
