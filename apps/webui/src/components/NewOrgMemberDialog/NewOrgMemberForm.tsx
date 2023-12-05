import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
	newOrgMemberFormSchema,
	NewOrgMemberFormType
} from "@/Components/NewOrgMemberDialog/NewOrgMemberFormSchema";
import {Form, FormField} from "@/Primitives/Form";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import {Input} from "@/Primitives/Input";
import * as React from "react";
import LoadingButton from "@/Components/Loading/LoadingButton/LoadingButton";
import {useMutation} from "@apollo/client";
import toast from "react-hot-toast";
import DropSelect from "@/Components/DropSelect/DropSelect";
import {roleSelectOptions} from "@/Constants/constants";
import {graphql} from "../../../../../packages/gql-types";
import {formatPhoneNumber, hasRole} from "@/Lib/utils";
import {useRecoilValue} from "recoil";
import {userState} from "@/State/state";
import {de} from "date-fns/locale";

const createOrganisationUser = graphql(`
	mutation CreateOrgUser($input: CreateUserInput!) {
		createUser(createUserInput: $input) {
			id
			name
			phone
			email
		}
	}
`)

/**
 * Props for the NewProjectForm component
 */
interface NewCrewMemberFormProps {
	/**
	 * Function to call when the form is submitted, used to close the modal and perform any other actions
	 */
	onFormSubmitComplete?: () => void;
	defaultRole?: string;
}

export default function NewOrgMemberForm({
											 onFormSubmitComplete,
											 defaultRole
										 }: NewCrewMemberFormProps) {
	const userInfo = useRecoilValue(userState);
	console.log(defaultRole)
	// The form hook for the NewProjectForm
	const form = useForm<NewOrgMemberFormType>({
		resolver: zodResolver(newOrgMemberFormSchema),
		defaultValues: {
			name: '',
			phone: '',
			email: '',
			role: defaultRole || "",
		},
	});

	const [createOrgMember] = useMutation(createOrganisationUser, {
		onCompleted: () => {
			toast.success("New crew member invited");
			onFormSubmitComplete?.();
		},
		onError: (error) => {
			toast.error(`Error: ${error.message}, please try again`);
			onFormSubmitComplete?.();
		},
		refetchQueries: ["SupervisorPageTableSection", "CrewPageTableSection"],
		awaitRefetchQueries: true,
	})

	async function onSubmit(values: NewOrgMemberFormType) {
		values.phone = formatPhoneNumber(values.phone)
		await createOrgMember({variables: {input: {...values}}})
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
												  description={"eg. 0412345678"}>
									<Input type={'text'} {...field} />
								</FormInputWrapper>
							)}
						/>
					</div>
					<div className="sm:col-span-3">
						<FormField
							control={form.control}
							name="email"
							render={({field}) => (
								<FormInputWrapper label={"Email"}>
									<Input type={'text'} {...field} />
								</FormInputWrapper>
							)}
						/>
					</div>
					<div className="sm:col-span-3">
						<FormField
							control={form.control}
							name="role"
							render={({field}) => (
								<FormInputWrapper label={"Role"}
												  description={"The role you want the user to have"}>
									<DropSelect
										options={[...roleSelectOptions, ...(hasRole(userInfo, 'OWNER') ? [{label: "Admin", value: "ADMIN"}] : [])]}
										defaultValue={field.value}
										onChange={field.onChange}
										placeholder={"Role"}
									/>
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
