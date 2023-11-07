import { useForm } from "react-hook-form";
import { Form, FormField } from "@/Primitives/Form";
import { Input } from "@/Primitives/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import FormInputWrapper from "@/Components/FormInputWrapper/FormInputWrapper";
import DatePicker from "@/Components/DatePicker/DatePicker";
import DropSelect from "@/Components/DropSelect/DropSelect";
import LoadingButton from "@/Components/Loading/LoadingButton/LoadingButton";
import {
	newJobFormSchema,
	NewJobFormType,
} from "@/Components/Jobs/NewJobDialog/NewJobForm/NewJobFormSchema";
import { useMutation } from "@apollo/client";
import { createNewJob } from "@/Services/jobService";
import toast from "react-hot-toast";
import { JobStatus, JobStatusSelectOptions } from "@/Constants/constants";
import { Textarea } from "@/Primitives/TextArea";

/**
 * Props for the NewProjectForm component
 */
interface NewProjectFormProps {
	/**
	 * Function to call when the form is submitted, used to close the modal and perform any other actions
	 */
	onFormSubmitComplete?: () => void;
}

/**
 * A form component that allows the user to create a new project
 * @param onFormSubmitComplete
 * @constructor
 */
export default function NewJobForm({ onFormSubmitComplete }: NewProjectFormProps) {
	const [createJob, { loading }] = useMutation(createNewJob, {
		onCompleted: () => {
			toast.success("Job created");
			onFormSubmitComplete?.();
		},
		onError: () => {
			toast.error("Error creating job");
			onFormSubmitComplete?.();
		},
		refetchQueries: ["JobsTableSearchJobs"],
		awaitRefetchQueries: true,
	});

	// The form hook for the NewProjectForm
	const form = useForm<NewJobFormType>({
		resolver: zodResolver(newJobFormSchema),
	});

	async function onSubmit(values: NewJobFormType) {
		await createJob({
			variables: {
				input: {
					...values,
				},
			},
		});
	}

	// helper function to set the value of a field in the form
	const onValueChange = (fieldName: string, value: string | Date) => {
		form.setValue(fieldName, value);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-3">
					<div className="sm:col-span-3">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormInputWrapper label={"Title"}>
									<Input {...field} />
								</FormInputWrapper>
							)}
						/>
					</div>
					<div className="sm:col-span-2">
						<FormField
							control={form.control}
							name="customerName"
							render={({ field }) => (
								<FormInputWrapper label={"Customer"}>
									<Input {...field} />
								</FormInputWrapper>
							)}
						/>
					</div>
					<div className="sm:col-span-2">
						<FormField
							control={form.control}
							name="dueDate"
							render={({ field }) => (
								<FormInputWrapper label={"Due date"}>
									<DatePicker
										onChange={(value) => onValueChange(field.name, value)}
										value={field.value}
									/>
								</FormInputWrapper>
							)}
						/>
					</div>
					<div className="sm:col-span-1">
						<FormField
							control={form.control}
							name="status"
							render={({ field }) => (
								<FormInputWrapper label={"Status"}>
									<DropSelect
										options={JobStatusSelectOptions}
										defaultValue={field.value}
										onChange={field.onChange}
										placeholder={"Status"}
									/>
								</FormInputWrapper>
							)}
						/>
					</div>
					<div className="sm:col-span-3">
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormInputWrapper label={"Description / Notes"}>
									<Textarea {...field} />
								</FormInputWrapper>
							)}
						/>
					</div>
				</div>
				<div className={"flex justify-end"}>
					<LoadingButton label={"Submit"} loadingStatus={false} type={"submit"} />
				</div>
			</form>
		</Form>
	);
}
