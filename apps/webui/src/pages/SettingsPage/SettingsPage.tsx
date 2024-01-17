import PageContentSection from "@/Components/PageContentSection";
import {Button} from "@/Primitives/Button/Button";

const secondaryNavigation = [
    {name: 'Account', href: '#', current: true},
    {name: 'Organisation', href: '#', current: false},
    {name: 'Billing', href: '#', current: false},
]
export default function SettingsPage() {
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
                                <a href={item.href} className={item.current ? 'text-indigo-400' : ''}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div>
                <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                    <div className={'border-r-2'}>
                        <h2 className="text-base font-semibold leading-7">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">
                            Use a permanent address where you can receive mail.
                        </p>
                    </div>
                    <form className="md:col-span-2">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
                                    First name
                                </label>
                                <div className="mt-2">
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 ">
                                    Last name
                                </label>
                                <div className="mt-2">
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
                                    Email
                                </label>
                                <div className="mt-2">
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 ">
                                    Phone
                                </label>
                                <div className="mt-2">
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Button
                                type="submit"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </div>

            </div>
        </PageContentSection>
    )
}
