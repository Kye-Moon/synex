import Varify from "../assets/varify.png";
import estiq from "../assets/EstiQ.png";
import fieldlens from "../assets/FieldLens.png";
export default function ProductsGrid(){
    return (
        <section className="bg-white flex justify-center mb-12">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen mb-8 lg:mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-extrabold">Products</h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 lg:h-14 lg:w-14">
                            <img alt={'logo'} src={Varify}/>
                        </div>
                        <h3 className="mb-2 text-3xl font-bold text-center">Varify</h3>
                        <h3 className="mb-2 text-xl font-bold text-center">Variation Management Tool</h3>
                        <p className="text-gray-600 text-center">Varify optimizes project management through precise variation tracking, ensuring accurate identification and billing. Maximize project profitability effortlessly by avoiding revenue loss through meticulous change management.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center mb-4 relative">
                        <span className="absolute top-0 right-0 bg-gray-400 text-white py-1 px-3 rounded-md text-xs font-bold uppercase">Coming Soon</span>
                        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 lg:h-14 lg:w-14">
                            <img alt={'logo'} src={estiq}/>
                        </div>
                        <h3 className="mb-2 text-3xl font-bold text-center">EstiQ</h3>
                        <h3 className="mb-2 text-xl font-bold text-center">Engineering Project Estimation Tool</h3>
                        <p className="text-gray-600 text-center">EstiQ revolutionizes project estimation with cutting-edge algorithms and intuitive design. Streamline engineering project assessments with precision and efficiency.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center mb-4 relative">
                        <span className="absolute top-0 right-0 bg-gray-400 text-white py-1 px-3 rounded-md text-xs font-bold uppercase">Coming Soon</span>
                        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 lg:h-10 lg:w-10 pb-8">
                            <img alt={'logo'} src={fieldlens}/>
                        </div>
                        <h3 className="mb-2 text-3xl font-bold text-center">FieldLens</h3>
                        <h3 className="mb-2 text-xl font-bold text-center">On-Site Photo Logging Tool</h3>
                        <p className="text-gray-600 text-center">FieldLens captures on-site progress vividly, applying filters and context to photos for streamlined documentation and comprehensive project logging.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}