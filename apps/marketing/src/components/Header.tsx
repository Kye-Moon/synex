import {Fragment, useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, Popover, Transition} from "@headlessui/react";
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from "@heroicons/react/20/solid";
import Logo from "../assets/synex1.png";
import varify from "../assets/varify.png";
import estiq from "../assets/EstiQ.png";
import fieldlens from "../assets/FieldLens.png";
import {Button} from "@/Primitives/Button/Button";
import {useNavigate} from "@tanstack/react-router";
import {SignInButton, useAuth} from "@clerk/clerk-react";


const products = [
    {name: 'Varify', description: 'Avoid missed revenue', href: '#varify', img: varify},
    {name: 'EstiQ', description: 'Streamline project cost estimation', href: '#varify', img: estiq},
    {name: 'Field lens', description: 'Apply meaningful context to photos', href: '#varify', img: fieldlens},
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate();
    const {isSignedIn} = useAuth();

    return (
        <header className="bg-white h-20 w-full ">
            <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 align-middle">
                    <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img className="h-12 w-auto"
                             src={Logo} alt=""/>
                    </a>
                    <span className="pl-4 mt-2 text-3xl font-bold">Synex</span>
                </div>
                {isSignedIn ? (
                    <Button className={'lg:hidden'} onClick={() => navigate({to: '/dashboard'})}>Dashboard</Button>
                ) : (
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                )}
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Products
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div
                                                className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <img src={item.img} className={'h-6'} alt=""/>
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0"/>
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2">
                    {isSignedIn && <Button onClick={() => navigate({to: '/dashboard'})}>Dashboard</Button>}
                    {!isSignedIn && <SignInButton><Button>Log in</Button></SignInButton>}
                    {!isSignedIn && <Button onClick={() => navigate({to: '/signup'})}>Get A Free Account</Button>}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-12 w-auto"
                                 src={Logo} alt=""/>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6">
                                <div className="lg:flex flex flex-col lg:flex-1 lg:justify-end space-y-2">
                                    {isSignedIn &&
                                        <Button onClick={() => navigate({to: '/dashboard'})}>Dashboard</Button>}
                                    {!isSignedIn && (
                                        <SignInButton
                                            afterSignInUrl={window.location.origin + '/dashboard'}
                                        >
                                            <Button>Log in</Button>
                                        </SignInButton>
                                    )}
                                    {!isSignedIn && <Button onClick={() => navigate({to: '/signup'})}>Get A Free
                                        Account</Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>

        </header>
    )
}