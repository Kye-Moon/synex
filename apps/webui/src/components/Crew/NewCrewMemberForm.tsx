import {useForm} from "react-hook-form";
import {
	newJobFormSchema,
	NewJobFormType
} from "@/Components/Jobs/NewJobDialog/NewJobForm/NewJobFormSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {
	newCrewMemberFormSchema,
	NewCrewMemberFormType
} from "@/Components/Crew/NewCrewMemberFormSchema";
import {Form, FormField} from "@/Primitives/Form";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import {Input} from "@/Primitives/Input";
import * as React from "react";
import LoadingButton from "@/Components/Loading/LoadingButton/LoadingButton";
import {useMutation} from "@apollo/client";
import {createUserCrew} from "@/Services/userCrewService";
import toast from "react-hot-toast";


/**
 * Props for the NewProjectForm component
 */
interface NewCrewMemberFormProps {
	/**
	 * Function to call when the form is submitted, used to close the modal and perform any other actions
	 */
	onFormSubmitComplete?: () => void;
}

export default function NewCrewMemberForm({onFormSubmitComplete}: NewCrewMemberFormProps) {
	// The form hook for the NewProjectForm
	const form = useForm<NewCrewMemberFormType>({
		resolver: zodResolver(newCrewMemberFormSchema),
		defaultValues: {
			name: '',
			phone: '',
		},
	});

	const [createCrewMember] = useMutation(createUserCrew, {
		onCompleted: () => {
			toast.success("New crew member invited");
			onFormSubmitComplete?.();
		},
		onError: (error) => {
			toast.error(`Error: ${error.message}, please try again`);
			onFormSubmitComplete?.();
		},
		refetchQueries: ["GetUserCrew"],
		awaitRefetchQueries: true,
	})

	async function onSubmit(values: NewCrewMemberFormType) {
		await createCrewMember({variables: {input: {...values}}})
	}

	// helper function to set the value of a field in the form
	const onValueChange = (fieldName: string, value: string | Date | undefined) => {
		form.setValue(fieldName, value);
	};


	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 overflow-auto">
				<div className=" px-1 mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-3">
					<div className="sm:col-span-3">
						<FormField
							control={form.control}
							name="name"
							render={({field}) => (
								<FormInputWrapper label={"Name"}>
									<Input {...field} />
								</FormInputWrapper>
							)}
						/>
					</div>
					<div className="sm:col-span-3">
						<FormField
							control={form.control}
							name="phone"
							render={({field}) => (
								<FormInputWrapper label={"Phone Number"}
												  description={"eg. 041234567e"}>
									<Input type={'text'} {...field} />
								</FormInputWrapper>
							)}
						/>
					</div>
				</div>
				<div className={"flex justify-end"}>
					<LoadingButton label={"Submit"} loadingStatus={false} type={"submit"}/>
				</div>
			</form>
		</Form>
	)
}
