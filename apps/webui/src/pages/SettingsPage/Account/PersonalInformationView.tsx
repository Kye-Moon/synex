import React from "react";
import StackedLabelAndValue from "@/Components/StackedLabelAndValue";
import {UserAccountQuery} from "gql-types";
import Badge from "@/Primitives/Badge/Badge";
import {enumToSentenceCase, getUserTypeBadgeVariant} from "@/Lib/utils";

interface PersonalInformationProps {
	user: UserAccountQuery['currentUser']
}

export default function PersonalInformationView({user}: PersonalInformationProps) {
	return (
		<div className={'grid grid-cols-8 gap-2 mr-4 '}>
			<div className={'col-span-4 pb-4'}>
				<StackedLabelAndValue label={'Full Name'} value={user.name}/>
			</div>
			<div className={'col-span-4 pb-4'}>
				<StackedLabelAndValue label={'Phone'} value={user.phone ?? "-"}/>
			</div>
			<div className={'col-span-8 pb-4'}>
				<StackedLabelAndValue label={'Email'} value={user.email}/>
			</div>
			<div className={'col-span-4 '}>
				<StackedLabelAndValue label={'Organisation'} value={user.organisation.name}/>
			</div>
			<div className={'col-span-4'}>
				<StackedLabelAndValue label={'Role'} value={
					<Badge
						variant={getUserTypeBadgeVariant(user.role)}
						text={user.role ? enumToSentenceCase(user.role) : '-'}
						size={'sm'}
					/>
				}
				/>
			</div>
		</div>
	)
}
