export default function Hero1() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-0 blur-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-full -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
                    </svg>
                </div>
                {/*<div*/}
                {/*    className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"*/}
                {/*    aria-hidden="true"*/}
                {/*>*/}
                {/*    <div*/}
                {/*        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2eb2ff] to-[#2eff43] opacity-5 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"*/}
                {/*        style={{*/}
                {/*            clipPath:*/}
                {/*                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-7xl">
                            Modernizing Industrial Engineering with Digital Innovation
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Empowering engineering firms and industrial contractors with unprecedented innovation, our software solutions redefine industry standards. Our cutting-edge microservices streamline operations and significantly enhance the performance and efficiency of businesses, setting new benchmarks in the sector.
                        </p>
                        {/*<div className="mt-10 flex items-center justify-center gap-x-6">*/}
                        {/*    <a*/}
                        {/*        href="#"*/}
                        {/*        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                        {/*    >*/}
                        {/*        Get started*/}
                        {/*    </a>*/}
                        {/*    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">*/}
                        {/*        Learn more <span aria-hidden="true">→</span>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </div>
    )
}
