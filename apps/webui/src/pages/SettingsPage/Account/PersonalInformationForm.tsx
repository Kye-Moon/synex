import {Form, FormField} from "@/Primitives/Form";
import {UseFormReturn} from "react-hook-form";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import {Input} from "@/Primitives/Input";
import React from "react";


interface PersonalInformationProps {
	form: UseFormReturn<any>
}

export default function PersonalInformationForm({form}: PersonalInformationProps) {
	return (
		<Form {...form}>
			<div className={'grid grid-cols-8 gap-2 mr-4 '}>
				<div className={'col-span-4'}>
					<FormField
						control={form.control}
						name="name"
						render={({field}) => (
							<FormInputWrapper label={"Full Name"}>
								<Input  {...field} />
							</FormInputWrapper>
						)}
					/>
				</div>
				<div className={'col-span-4'}>
					<FormField
						control={form.control}
						name="phone"
						render={({field}) => (
							<FormInputWrapper label={"Phone"}>
								<Input {...field} />
							</FormInputWrapper>
						)}
					/>
				</div>
				<div className={'col-span-8'}>
					<FormField
						control={form.control}
						name="email"
						render={({field}) => (
							<FormInputWrapper label={"Email"}>
								<Input {...field} />
							</FormInputWrapper>
						)}
					/>
				</div>
			</div>
		</Form>
	)
}
