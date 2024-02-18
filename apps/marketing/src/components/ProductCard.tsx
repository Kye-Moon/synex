import * as React from "react"

import {Button} from "@/Primitives/Button/Button"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/Primitives/Card"
import {useAuth} from "@clerk/clerk-react";

interface ProductCardProps {
    productName: string
    productDescription: string
    productImage: string
    productSiteLink: string
    isSubscribed?: boolean
    onSubscribe?: () => void
}

export function ProductCard({
                                productName,
                                productDescription,
                                productImage,
                                productSiteLink,
                                isSubscribed,
                                onSubscribe,
                            }: ProductCardProps) {

    const {has, isLoaded} = useAuth();
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
                {has && has({role: 'org:admin'}) && (
                    <>
                        {!isSubscribed && (
                            <div className={'space-x-2'}>
                                <Button>More</Button>
                                <Button onClick={() => onSubscribe && onSubscribe()}>Subscribe</Button>
                            </div>
                        )}
                    </>
                )}
                {isSubscribed && (
                    <div className={'space-x-2'}>
                        <Button onClick={() => window.open(productSiteLink)}>Open</Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    )
}
