import {useForm} from "react-hook-form";
import {enquiryFormSchema, EnquiryFormType} from "@/Components/EnquiryForm/EnquiryFormSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Client} from "@notionhq/client"
import {Button} from "@/Primitives/Button/Button";
import useClient from "../../hooks/useClient";
import {Form, FormField} from "@/Primitives/Form";
import {Input} from "@/Primitives/Input";
import FormInputWrapper from "@/Components/Form/FormInputWrapper/FormInputWrapper";
import {Textarea} from "@/Primitives/TextArea";
import toast from "react-hot-toast";

interface EnquiryFormProps {
    appName: string
}

export default function EnquiryForm({appName}: EnquiryFormProps) {
    const client = useClient();
    const form = useForm<EnquiryFormType>({
        resolver: zodResolver(enquiryFormSchema),
        defaultValues: {
            name: '',
            phone: '',
            company: '',
            email: '',
            message: "",
        },
    });

    const addEnquiry = async (values: EnquiryFormType) => {
        try {
            await client.post('/user/enquiry', {
                ...values,
                product: appName
            });
            toast.success("Enquiry submitted successfully, we will be in touch soon", {
                duration: 10000
            });
        } catch (e) {
            console.error(e);
            toast.error("Sorry, there was an error submitting your enquiry, please try again later");
        }
        form.reset();
    }

    return (
        <>
            <div className={'space-y-2 mb-6'}>
                <h1 className={'text-2xl font-bold'}>
                    Enquire about {appName}
                </h1>
                <p>
                    Fill in the form below to enquire about {appName}, you will receive a short demo via email and we
                    will
                    contact you within 24 hours.
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(addEnquiry)} className="space-y-2">
                    <div className=" grid grid-cols-1 gap-x-6 sm:grid-cols-4">
                        <div className="sm:col-span-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormInputWrapper label={"Full Name"}>
                                        <Input onChange={field.onChange} value={field.value}/>
                                    </FormInputWrapper>
                                )}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <FormField
                                control={form.control}
                                name="company"
                                render={({field}) => (
                                    <FormInputWrapper label={"Company Name"}>
                                        <Input onChange={field.onChange} value={field.value}/>
                                    </FormInputWrapper>
                                )}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormInputWrapper label={"Email"}>
                                        <Input onChange={field.onChange} value={field.value}/>
                                    </FormInputWrapper>
                                )}
                            />
                        </div>
                        <div className="sm:col-span-1">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormInputWrapper label={"Phone"}>
                                        <Input onChange={field.onChange} value={field.value}/>
                                    </FormInputWrapper>
                                )}
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({field}) => (
                                    <FormInputWrapper label={"Other information"}>
                                        <Textarea onChange={field.onChange} value={field.value}/>
                                    </FormInputWrapper>
                                )}
                            />
                        </div>
                    </div>
                    <div className={'flex justify-end'}>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        </>
    )
}