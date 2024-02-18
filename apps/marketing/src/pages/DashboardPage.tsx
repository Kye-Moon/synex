import {useNavigate} from "@tanstack/react-router";
import {useEffect} from "react";
import {useOrganization, useUser} from "@clerk/clerk-react";
import PageHeadingWithMetaAndActions from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import {ProductCard} from "@/Components/ProductCard";
import VarifyLogo from "@/Assets/varify.png";
import FieldlenzLogo from "@/Assets/Fieldlens.png";
import useClient from "../hooks/useClient";

export default function DashboardPage() {
    const navigate = useNavigate();
    const {isSignedIn, user, isLoaded} = useUser();
    const {organization} = useOrganization();
    const client = useClient();
    useEffect(() => {
        if (!isSignedIn && isLoaded) {
            navigate({to: "/"});
        }
    }, [isSignedIn, isLoaded]);

    return (
        <div>
            <PageHeadingWithMetaAndActions pageHeading={"Dashboard"}/>
            <PageContentSection>
                <h1 className={'text-lg font-semibold'}>Your Applications</h1>
                <div className={'py-6 grid grid-cols-2 lg:grid-cols-3 '}>
                    {organization?.publicMetadata?.varify_access === 'true' && (
                        <div className={'col-span-1'}>
                            <ProductCard
                                productName={'Varify'}
                                productDescription={'Streamlined On to Off site communication for industrial sites'}
                                productImage={VarifyLogo}
                                productSiteLink={'https://varify.synex.one/login'}
                                isSubscribed={true}
                            />
                        </div>
                    )}
                    {organization?.publicMetadata?.field_lenz_access === 'true' && (
                        <div className={'col-span-1'}>
                            <ProductCard
                                productName={'Fieldlenz'}
                                productDescription={'The leading on site image capture and documentation tool'}
                                productImage={FieldlenzLogo}
                                productSiteLink={''}
                                isSubscribed={true}
                            />
                        </div>
                    )}
                </div>
            </PageContentSection>
            <PageContentSection>
                <h1 className={'text-lg font-semibold'}>Our other products</h1>
                <div className={'py-6 grid grid-cols-2 lg:grid-cols-3 '}>
                    {organization?.publicMetadata?.varify_access !== 'true' && (
                        <div className={'col-span-1'}>
                            <ProductCard
                                productName={'Varify'}
                                productDescription={'Streamlined On to Off site communication for industrial sites'}
                                productImage={VarifyLogo}
                                productSiteLink={'https://varify.synex.one/login'}
                                onSubscribe={async () => {
                                    const response = await client.post('/payments', {
                                        priceId: import.meta.env.VITE_VARIFY_PRICE_ID
                                    })
                                    window.open(response.data.url, '_blank')
                                }}
                            />
                        </div>
                    )}
                    {organization?.publicMetadata?.field_lenz_access !== 'true' && (
                        <div className={'col-span-1'}>
                            <ProductCard
                                productName={'Fieldlenz'}
                                productDescription={'The leading on site image capture and documentation tool'}
                                productImage={FieldlenzLogo}
                                productSiteLink={'https://varify.synex.one/login'}
                                onSubscribe={async () => {
                                    const response = await client.post('/payments', {
                                        priceId: import.meta.env.VITE_FIELD_LENZ_PRICE_ID
                                    })
                                    window.open(response.data.url, '_blank')
                                }}
                            />
                        </div>
                    )}
                </div>
            </PageContentSection>
        </div>
    )
}