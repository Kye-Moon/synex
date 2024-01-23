import PageContentSection from "@/Components/PageContentSection";
import {Button} from "@/Primitives/Button/Button";
import PersonalInformationForm from "@/Pages/SettingsPage/Account/PersonalInformationForm";
import {graphql} from "gql-types";
import {Suspense, useState} from "react";
import AccountSection from "@/Pages/SettingsPage/Account/AccountSection";
import {useSearch} from "@tanstack/react-router";
import OrganisationSettings from "@/Pages/SettingsPage/Organisation/OrganisationSettings";
import BillingSettings from "@/Pages/SettingsPage/Billing/BillingSettings";
import {hasRole} from "@/Lib/utils";
import {useRecoilValue} from "recoil";
import {userState} from "@/State/state";

const query = graphql(`
	query User($id: String!) {
		user(id: $id) {
			id
			name
			email
			phone
			role
			organisation {
				id
				name
			}
		}
	}
`)

const enum TabState {
	ACCOUNT = 'account',
	ORGANISATION = 'organisation',
	BILLING = 'billing',
}

export default function SettingsPage() {
	const [tabState, setTabState] = useState<TabState>(TabState.ACCOUNT)
	const userInfo = useRecoilValue(userState)
	const secondaryNavigation = [
		{name: 'Account', tabState: TabState.ACCOUNT, current: TabState.ACCOUNT === tabState},
		{
			name: 'Organisation',
			tabState: TabState.ORGANISATION,
			current: TabState.ORGANISATION === tabState
		},
		{name: 'Billing', tabState: TabState.BILLING, current: TabState.BILLING === tabState},
	]
	return (
		<PageContentSection>
			<header className="border-b border-white/5">
				{/* Secondary navigation */}
				<nav className="flex overflow-x-auto py-4">
					<ul
						role="list"
						className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
					>
						{secondaryNavigation.map((item) => (
							<li key={item.name}>
								<Button variant={'ghost'}
										onClick={() => setTabState(item.tabState)}
										className={item.current ? 'text-indigo-400' : ''}>
									{item.name}
								</Button>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<div>
				<div
					className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					{tabState === TabState.ACCOUNT && (
						<>
							<div className={'border-r-2 px-4'}>
								<h2 className="text-base font-semibold leading-7">Personal
									Information</h2>
								<p className="mt-1 text-sm leading-6 text-gray-400">
									Use a permanent address where you can receive mail.
								</p>
							</div>
							<div className={'col-span-2'}>
								<Suspense fallback={<div>Loading...</div>}>
									<AccountSection/>
								</Suspense>
							</div>
						</>
					)}

					{tabState === TabState.ORGANISATION && (
						<>
							{hasRole(userInfo, 'OWNER')
								? (
									<Suspense fallback={<div>Loading...</div>}>
										<OrganisationSettings/>
									</Suspense>
								) : (
									<div>
										<h3 className={'text-xl font-semibold'}>Organisation</h3>
										<p className="mt-1 text-sm leading-6 text-gray-400">
											You are not the owner of this organisation
										</p>
									</div>
								)}
						</>
					)}
					{tabState === TabState.BILLING && (
						<Suspense fallback={<div>Loading...</div>}>
							<BillingSettings/>
						</Suspense>
					)}

				</div>
			</div>
		</PageContentSection>
	)
}
