
// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import { CiUser } from "react-icons/ci";
// import { BsStars } from "react-icons/bs";
// import { TfiReload } from "react-icons/tfi";
// import { RiMailAiLine } from "react-icons/ri";
// import Navbar from "../navbar";
// import Footer from "../footer";
// import Link from "next/link";
// import { TbCircleDotted } from "react-icons/tb";
// import { MdOutlineFingerprint } from "react-icons/md";
// import { SiAutodesk } from "react-icons/si";
// import { SiDolby } from "react-icons/si";
// import { FaProductHunt } from "react-icons/fa6";
// import { FiArrowRight } from "react-icons/fi";

// const Apollo = () => {
//     return (
//         <div className="bg-background-3  min-h-screen py-5 px-5 pt-15">
//             <Navbar />

//             <section className="bg-gradient-to-r from-white via-white via-40% to-purple-300 px-7 mt-5 mb-5 rounded-xl">
//                 <div className="grid grid-cols-2">
//                     <div className="max-w-107 my-14">
//                          <div className="max-w-sm">
//                             <p className="text-5xl font-medium">Meet your AI outbound engine</p>
//                             <p className="text-gray-800 mt-5 leading-5">Find and research leads, personalize messaging, <br /> and launch campaigns in minutes - not hours. All <br /> in  Apollo.</p>                  
//                         </div>

//                         <div className="flex items-center gap-3 mt-5">
//                             <Input className="py-5 border-gray-400 placeholder:text-base focus:border-black hover:border-gray-600 dueration-300" placeholder="Enter email"/>
//                             <Button className="font-normal bg-background-4 text-black hover:bg-yellow-100 duration-300 text-base py-5.5 px-5">
//                                 Sign up for free
//                             </Button>
//                         </div>

//                         <div className="flex items-center gap-4 my-5">
//                             <hr className="flex-1 border-gray-300" />
//                             <span className="text-gray-600">or</span>
//                             <hr className="flex-1 border-gray-300" />
//                         </div>

//                         <div className="space-y-4">
//                            <Button className="flex items-center bg-white text-black text-base font-normal border border-black w-full py-6 hover:bg-background-3 duration-300 cursor-pointer">
//                                 <Image src="/asset/google.png" alt="Google-logo" width={17} height={28} />
//                                 <span>Sign up with Google</span>
//                            </Button>

//                            <Button className="flex items-center bg-white text-black text-base font-normal border border-black w-full py-6 hover:bg-background-3 duration-300 cursor-pointer">
//                                 <Image src="/asset/microsoft.png" alt="Google-logo" width={17} height={28} />
//                                 <span>Sign up with Microsoft</span>
//                            </Button>

//                            <p className="text-sm text-gray-700">
//                                 By signing up, I agree to Apollo&&apos;s 
//                                 <Link href="/terms-of-service" className="underline hover:text-gray-500">
//                                 Terms of Service
//                                 </Link>{" "}
//                                 and{" "}
//                                 <Link href="/privacy-policy" className="underline hover:text-gray-500">
//                                     Privacy Policy.
//                                 </Link>
//                              </p>
//                         </div>
//                     </div>

//                    <div className="my-18">
//                         <div className="space-y-4 mb-12">
//                             <div className="bg-white flex items-center gap-3 max-w-sm rounded-sm px-3 py-2 mx-auto">
//                                 <div className="bg-gray-800 text-white rounded-full p-3 flex items-center justify-center">
//                                     <CiUser className="text-xl"/>
//                                 </div>
//                                 <div>
//                                     <p className="uppercase text-[11px] text-gray-600 mb-1">Enrollment criteria</p>
//                                     <div className="flex flex-wrap gap-1">
//                                         <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Marketing leaders</p>
//                                         <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Recently funded</p>
//                                         <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">North America</p>
//                                     </div>
//                                 </div>

//                             </div>

//                             <div className="bg-white flex items-center gap-3 max-w-sm rounded-sm px-3 py-2 mx-auto">
//                                 <div className="bg-purple-400 text-white rounded-full p-3 flex items-center justify-center">
//                                     <BsStars className="text-xl"/>
//                                 </div>
//                                 <div>
//                                     <p className="uppercase text-[11px] text-gray-600 mb-1">Research with ai</p>
//                                     <div className="flex flex-wrap gap-1">
//                                         <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Confirm decison maker</p>
//                                         <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Research & qualify company</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <p className="text-[8px] text-white bg-[#71706C] py-1 w-8 mx-auto mt-7 text-center rounded-full">TRUE</p>
//                         </div>


//                         <div className="space-y-4">
//                             <div className="bg-white flex items-center gap-3 max-w-90 rounded-sm px-3 py-2">
//                                 <div className="bg-gray-800 text-white rounded-full p-3 flex items-center justify-center">
//                                     <TfiReload className="text-xl"/>
//                                 </div>
//                                 <div>
//                                     <p className="uppercase text-[11px] text-gray-600 mb-1">Enrich data</p>
//                                     <div className="flex flex-wrap gap-1">
//                                         <p className="text-sm">Enrich</p>
//                                         <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Email</p>
//                                     </div>
//                                 </div>

//                             </div>

//                             <div className="bg-white flex items-center gap-3 max-w-90 rounded-sm px-3 py-2">
//                                 <div className="bg-purple-400 text-white rounded-full p-3 flex items-center justify-center">
//                                     <RiMailAiLine className="text-xl"/>
//                                 </div>
//                                 <div>
//                                     <p className="uppercase text-[11px] text-gray-600">add contacts to sequence</p>
//                                     <p className=" text-sm mb-1">Generate AI emails with signals</p>
//                                     <div className="flex flex-wrap gap-1">
//                                         <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Funding rounds</p>
//                                         <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Company pain points</p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                    </div>
//                 </div>              
//             </section>

//             <section>
//                 <div className="bg-gray-100 px-7 pt-8 pb-15 mt-5 rounded-t-xl">
//                     <div className="flex items-center justify-between">
//                         <p 
//                         className="text-[12px] text-gray-800 uppercase" 
//                         style={{ fontFamily: '__foundersGroteskMono_306ed5, __foundersGroteskMono_Fallback_306ed5', wordSpacing: '0.4em' }}
//                         >
//                             Join over 500,000 Businesses using apollo
//                         </p>
//                         <div className="flex items-center gap-8">
//                             <div className="flex items-center gap-1">
//                                 <SiAutodesk />
//                                 <p className="text-sm font-medium">AUTODESK</p>
//                             </div>
//                             <div className="flex items-center gap-0.5">
//                                 <SiDolby />
//                                 <p className="text-sm font-medium">Dolby</p>
//                             </div>
//                             <div className="flex items-center gap-0.5">
//                                 <MdOutlineFingerprint className="text-lg" />
//                                 <p className="text-xs font-medium">SMARTLING</p>
//                             </div>
//                             <div className="flex items-center gap-0.5">
//                                 <TbCircleDotted className="font-black" />
//                                 <p className="text-sm font-mediu">CYERA</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex items-end gap-10 my-15">
//                         <p className="font-medium text-5xl">&quot;Apollo supports people <br /> who want to be <br /> innovative — to do <br /> something new.&quot;
//                         </p>

//                         <div className="max-full mx-auto">
//                             <p className="uppercase text-xs mb-3">Grace Feeny</p>
//                             <p className="uppercase text-xs mb-2">senior manager of sales <br /> development & operations</p>
//                             <div className="flex items-center gap-0,5 text-lg">
//                                 <MdOutlineFingerprint className="text-2xl" />
//                                 <p className="font-medium">SMARTLING</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-3 items-center gap-6">
//                         <div className="bg-white px-4 py-4 rounded-md">
//                             <div className="flex items-start justify-between mb-6">
//                                 <p className="text-sm text-gray-500 leading-4">5x meetings <br /> booked</p>
//                                 <p className="font-bold text-lg">Leadium.</p>
//                             </div>
//                             <div>
//                                 <p className="text-7xl text-slate-900">5x</p>
//                             </div>
//                         </div>

//                         <div className="bg-white px-4 py-4 rounded-md">
//                             <div className="flex items-start justify-between mb-5">
//                                 <p className="text-sm text-gray-500 leading-4">2x increase in email <br /> open rate</p>
//                                 {/* <p className=" border border-black px-2  text-lg"></p> */}
//                                 <FaProductHunt className="text-2xl" />
//                             </div>
//                             <div>
//                                 <p className="text-7xl text-slate-900">2x</p>
//                             </div>
//                         </div>

//                         <div className="bg-white px-4 py-4 rounded-md">
//                             <div className="flex items-start justify-between mb-5">
//                                 <p className="text-sm text-gray-500 leading-4">400% more phone <br /> numbers</p>
//                                 <p className="font-bold text-base">Census</p>
//                             </div>
//                             <div>
//                                 <p className="text-7xl text-slate-900">400%</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="bg-white pt-20 px-7">
//                     <div className="max-w-xs">
//                         <p className="font-normal text-5xl leading-14 mb-12">Apolloo, <br /> The AI Sales Platform</p>
//                         <p className="text-gray-700 max-w-xs font-medium mb-5">Apollo is an end-to-end AI sales platform with all features, integrations, and <br /> training you need to grow your business.</p>

//                         <div className="space-y-5 mb-5">
//                             <div className="flex items-center justify-between text-gray-500 hover:text-gray-900 cursor-pointer">
//                                 <p className="text-sm">Pipeline Builder</p>
//                                 <FiArrowRight className="text-xl"/>
//                             </div>
//                             <hr className="border-gray-500" />

//                             <div className="flex items-center justify-between text-gray-500 hover:text-gray-900 cursor-pointer">
//                                 <p className="text-sm">Call Assistant</p>
//                                 <FiArrowRight className="text-xl"/>
//                             </div>
//                             <hr className="border-gray-500" />

//                             <div className="flex items-center justify-between text-gray-500 hover:text-gray-900 cursor-pointer">
//                                 <p className="text-sm">Data Enrichment</p>
//                                 <FiArrowRight className="text-xl"/>
//                             </div>
//                             <hr className="border-gray-500" />

//                             <div className="flex items-center justify-between text-gray-500 hover:text-gray-900 cursor-pointer">
//                                 <p className="text-sm">Go-To-Market Platform</p>
//                                 <FiArrowRight className="text-xl"/>
//                             </div>
//                         </div>
//                     </div>

//                     <h2 className="text-center text-6xl font-medium max-w-3xl mx-auto mb-20">Everything you need <br /> to sell, scale, and succeed</h2>

                    
//                     <div className="grid grid-cols-4 gap-4 pb-20">
//                         <div className="bg-gray-100 rounded-md px-5 py-9">
//                             <Image src="/asset/pipeline-builder.svg" alt="pipeline logo" width={37} height={28} className="mx-auto mb-3"/>
//                             <p className="text-2xl font-medium text-center mb-3">Pipeline Builder</p>
//                             <p className="text-xs text-center text-gray-500">Build pipeline faster with better data, smarter AI, and easier automation.</p>
//                         </div>

//                         <div className="bg-gray-100 rounded-md px-5 py-9">
//                             <Image src="/asset/call-assistant.svg" alt="call logo" width={37} height={28} className="mx-auto mb-3"/>
//                             <p className="text-2xl font-medium text-center mb-3">Call Assistant</p>
//                             <p className="text-xs text-center text-gray-500">Close every winnable deal with call recordings, meeting scheduling, and AI insights.</p>
//                         </div>

//                         <div className="bg-gray-100 rounded-md px-5 py-9">
//                             <Image src="/asset/data-enrichment.svg" alt="data logo" width={37} height={28} className="mx-auto mb-3"/>
//                             <p className="text-2xl font-medium text-center mb-3">Data Enrichment</p>
//                             <p className="text-xs text-center text-gray-500">Keep your CRM and marketing automation data up to date, all the time.</p>
//                         </div>

//                         <div className="bg-gray-100 rounded-md px-5 py-9">
//                             <Image src="/asset/pipeline-builder.svg" alt="market logo" width={37} height={28} className="mx-auto mb-3"/>
//                             <p className="text-2xl font-medium text-center mb-3">Go-To-Market Platform</p>
//                             <p className="text-xs text-center text-gray-500">Manage your entire end-to-end sales cycle in Apollo - your ultimate command center.</p>
//                         </div>
//                     </div>

//                     <div className="flex items-start justify-between pb-10">
//                         <div className="max-w-2xs">
//                             <p className="text-3xl font-medium mb-7">The fastest growing businesses use Apollo</p>
//                             <p className="text-sm">Over 500,000 companies use Apollo to stay ahead of the competition.</p>
//                         </div>
//                         <p className="text-9xl text-slate-900">500K+</p>
//                     </div>
//                 </div>
//             </section>

//             <section>
//                 <div className="bg-yellow-200 mt-3 pt-5 grid grid-cols-2 items-start px-7 rounded-xl mb-10">
//                     <div className="max-w-xl">
//                         <p className="text-5xl mb-15 pt-15 font-medium">The best sales platform in the world, at an (almost) unbelievable value</p>
//                         <p className="mb-7 text-[15px]">You don&apos;t have to spend a fortune to run a world- <br />class revenue-generating machine. Replace <br /> ZoomInfo, Outreach, Salesloft, Gong, Chili Piper,<br /> and more with Apollo to cut costs and get better <br /> results.</p>
                        
//                         <div className="flex items-center gap-3">
//                             <Button className="py-6 px-6 bg-black font-normal hover:bg-gray-800 duration-300 cursor-pointer text-base">See pricing</Button>
//                             <Button className="bg-transparent text-black font-normal border border-black hover:bg-gray-200 duration-300 px-5 py-6 text-base cursor-pointer">
//                                 Get started for free
//                             </Button>
//                         </div>
//                     </div>

//                     <Image src="/asset/footer.svg" alt="market logo" width={600} height={28} className="mx-auto mb-3"/>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     )
// }

// export default Apollo


"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { RiMailAiLine } from "react-icons/ri";
import Navbar from "../navbar";
import Footer from "../footer";
import Link from "next/link";
import { TbCircleDotted } from "react-icons/tb";
import { MdOutlineFingerprint } from "react-icons/md";
import { SiAutodesk } from "react-icons/si";
import { SiDolby } from "react-icons/si";
import { FaProductHunt } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

const Apollo = () => {
    return (
        <div className="bg-background-3 min-h-screen py-5 px-3 sm:px-5 pt-15">
            <Navbar />

            {/* SECTION 1: HERO SECTION WITH FORM */}
            {/* STEP 1: Change from 2 columns to 1 column on mobile, stack vertically */}
            <section className="bg-gradient-to-r from-white via-white via-30% to-purple-300 px-4 sm:px-7 mt-5 mb-5 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
                    
                    {/* LEFT SIDE - Form and Content */}
                    {/* STEP 2: Remove max-width constraint on mobile for full width usage */}
                    <div className="w-full lg:max-w-107 my-8 lg:my-14">
                        <div className="max-w-full lg:max-w-sm">
                            {/* STEP 3: Responsive heading - smaller on mobile, larger on desktop */}
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                                Meet your AI outbound engine
                            </p>
                            {/* STEP 4: Remove <br /> tags on mobile, they cause awkward line breaks */}
                            <p className="text-gray-800 mt-5 text-sm sm:text-base leading-relaxed">
                                Find and research leads, personalize messaging, and launch campaigns in minutes - not hours. All in Apollo.
                            </p>                  
                        </div>

                        {/* STEP 5: Stack input and button vertically on mobile */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-5">
                            <Input 
                                className="py-5 border-gray-400 placeholder:text-sm sm:placeholder:text-base focus:border-black hover:border-gray-600 duration-300 w-full" 
                                placeholder="Enter email"
                            />
                            <Button className="font-normal bg-background-4 text-black hover:bg-yellow-100 duration-300 text-sm sm:text-base py-5 px-5 w-full sm:w-auto whitespace-nowrap">
                                Sign up for free
                            </Button>
                        </div>

                        {/* STEP 6: Divider with "or" text */}
                        <div className="flex items-center gap-4 my-5">
                            <hr className="flex-1 border-gray-300" />
                            <span className="text-gray-600 text-sm">or</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* STEP 7: Social login buttons - full width on all screens */}
                        <div className="space-y-4">
                            <Button className="flex items-center justify-center gap-2 bg-white text-black text-sm sm:text-base font-normal border border-black w-full py-5 sm:py-6 hover:bg-background-3 duration-300 cursor-pointer">
                                <Image src="/asset/google.png" alt="Google-logo" width={17} height={17} />
                                <span>Sign up with Google</span>
                            </Button>

                            <Button className="flex items-center justify-center gap-2 bg-white text-black text-sm sm:text-base font-normal border border-black w-full py-5 sm:py-6 hover:bg-background-3 duration-300 cursor-pointer">
                                <Image src="/asset/microsoft.png" alt="Microsoft-logo" width={17} height={17} />
                                <span>Sign up with Microsoft</span>
                            </Button>

                            <p className="text-xs sm:text-sm text-gray-700">
                                By signing up, I agree to Apollo&apos;s{" "}
                                <Link href="/terms-of-service" className="underline hover:text-gray-500">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy-policy" className="underline hover:text-gray-500">
                                    Privacy Policyy.
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Workflow Cards */}
                    {/* STEP 8: Hide on mobile, show on large screens only */}
                    <div className="lg:block my-18">
                        <div className="space-y-4 mb-12">
                            <div className="bg-white flex items-center gap-3 max-w-sm rounded-sm px-3 py-2 mx-auto shadow-2xl">
                                <div className="bg-gray-800 text-white rounded-full p-3 flex items-center justify-center shrink-0">
                                    <CiUser className="text-xl"/>
                                </div>
                                <div>
                                    <p className="uppercase text-[11px] text-gray-600 mb-1">Enrollment criteria</p>
                                    <div className="flex flex-wrap gap-1">
                                        <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Marketing leaders</p>
                                        <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Recently funded</p>
                                        <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">North America</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white flex items-center gap-3 max-w-sm rounded-sm px-3 py-2 mx-auto shadow-2xl">
                                <div className="bg-purple-400 text-white rounded-full p-3 flex items-center justify-center shrink-0">
                                    <BsStars className="text-xl"/>
                                </div>
                                <div>
                                    <p className="uppercase text-[11px] text-gray-600 mb-1">Research with ai</p>
                                    <div className="flex flex-wrap gap-1">
                                        <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Confirm decision maker</p>
                                        <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Research & qualify company</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[8px] text-white bg-[#71706C] py-1 w-8 mx-auto mt-7 text-center rounded-full">TRUE</p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white flex items-center gap-3 max-w-90 rounded-sm px-3 py-2 shadow-2xl">
                                <div className="bg-gray-800 text-white rounded-full p-3 flex items-center justify-center shrink-0">
                                    <TfiReload className="text-xl"/>
                                </div>
                                <div>
                                    <p className="uppercase text-[11px] text-gray-600 mb-1">Enrich data</p>
                                    <div className="flex flex-wrap gap-1">
                                        <p className="text-sm">Enrich</p>
                                        <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Email</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white flex items-center gap-3 max-w-90 rounded-sm px-3 py-2 shadow-2xl">
                                <div className="bg-purple-400 text-white rounded-full p-3 flex items-center justify-center shrink-0">
                                    <RiMailAiLine className="text-xl"/>
                                </div>
                                <div>
                                    <p className="uppercase text-[11px] text-gray-600">add contacts to sequence</p>
                                    <p className="text-sm mb-1">Generate AI emails with signals</p>
                                    <div className="flex flex-wrap gap-1">
                                        <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Funding rounds</p>
                                        <p className="text-sm bg-gray-100 px-2 py-0.5 rounded">Company pain points</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            </section>

            {/* SECTION 2: TESTIMONIALS AND STATS */}
            <section>
                <div className="bg-gray-100 px-4 sm:px-7 pt-8 pb-10 sm:pb-15 mt-5 rounded-t-xl">
                    
                    {/* STEP 9: Stack company logos vertically on mobile */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0 mb-8">
                        <p 
                            className="text-[10px] sm:text-[12px] text-gray-800 uppercase" 
                            style={{ fontFamily: '__foundersGroteskMono_306ed5, __foundersGroteskMono_Fallback_306ed5', wordSpacing: '0.4em' }}
                        >
                            Join over 500,000 Businesses using apollo
                        </p>
                        
                        {/* STEP 10: Wrap logos, show 2 per row on mobile */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap items-center gap-4 sm:gap-8">
                            <div className="flex items-center gap-1">
                                <SiAutodesk className="text-sm sm:text-base" />
                                <p className="text-xs sm:text-sm font-medium">AUTODESK</p>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <SiDolby className="text-sm sm:text-base" />
                                <p className="text-xs sm:text-sm font-medium">Dolby</p>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <MdOutlineFingerprint className="text-base sm:text-lg" />
                                <p className="text-[10px] sm:text-xs font-medium">SMARTLING</p>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <TbCircleDotted className="font-black text-sm sm:text-base" />
                                <p className="text-xs sm:text-sm font-medium">CYERA</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 11: Stack quote and author vertically on mobile */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-10 my-10 lg:my-15">
                        <p className="font-medium text-2xl sm:text-3xl lg:text-5xl leading-tight">
                            &quot;Apollo supports people who want to be innovative — to do something new.&quot;
                        </p>

                        <div className="w-full lg:w-auto">
                            <p className="uppercase text-xs mb-3">Grace Feeny</p>
                            <p className="uppercase text-xs mb-2">
                                senior manager of sales development & operations
                            </p>
                            <div className="flex items-center gap-0.5 text-lg">
                                <MdOutlineFingerprint className="text-2xl" />
                                <p className="font-medium">SMARTLING</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 12: Stats cards - 1 column mobile, 3 columns desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 sm:gap-6">
                        <div className="bg-white px-4 py-4 rounded-md">
                            <div className="flex items-start justify-between mb-6">
                                <p className="text-sm text-gray-500 leading-4">5x meetings booked</p>
                                <p className="font-bold text-lg">Leadium.</p>
                            </div>
                            <div>
                                <p className="text-5xl sm:text-6xl lg:text-7xl text-slate-900">5x</p>
                            </div>
                        </div>

                        <div className="bg-white px-4 py-4 rounded-md">
                            <div className="flex items-start justify-between mb-5">
                                <p className="text-sm text-gray-500 leading-4">2x increase in email open rate</p>
                                <FaProductHunt className="text-2xl" />
                            </div>
                            <div>
                                <p className="text-5xl sm:text-6xl lg:text-7xl text-slate-900">2x</p>
                            </div>
                        </div>

                        <div className="bg-white px-4 py-4 rounded-md sm:col-span-2 lg:col-span-1">
                            <div className="flex items-start justify-between mb-5">
                                <p className="text-sm text-gray-500 leading-4">400% more phone numbers</p>
                                <p className="font-bold text-base">Census</p>
                            </div>
                            <div>
                                <p className="text-5xl sm:text-6xl lg:text-7xl text-slate-900">400%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* STEP 13: Platform features section */}
                <div className="bg-white pt-12 sm:pt-20 px-4 sm:px-7">
                    <div className="max-w-full sm:max-w-xs mb-8 sm:mb-0">
                        <p className="font-normal text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8 sm:mb-12">
                            Apollo, The AI Sales Platform
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base font-medium mb-5">
                            Apollo is an end-to-end AI sales platform with all features, integrations, and training you need to grow your business.
                        </p>

                        {/* STEP 14: Feature links with arrows */}
                        <div className="space-y-5 mb-8 sm:mb-5">
                            <div className="flex items-center justify-between text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">
                                <p className="text-sm">Pipeline Builder</p>
                                <FiArrowRight className="text-xl"/>
                            </div>
                            <hr className="border-gray-500" />

                            <div className="flex items-center justify-between text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">
                                <p className="text-sm">Call Assistant</p>
                                <FiArrowRight className="text-xl"/>
                            </div>
                            <hr className="border-gray-500" />

                            <div className="flex items-center justify-between text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">
                                <p className="text-sm">Data Enrichment</p>
                                <FiArrowRight className="text-xl"/>
                            </div>
                            <hr className="border-gray-500" />

                            <div className="flex items-center justify-between text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">
                                <p className="text-sm">Go-To-Market Platform</p>
                                <FiArrowRight className="text-xl"/>
                            </div>
                        </div>
                    </div>

                    {/* STEP 15: Large heading - responsive text size */}
                    <h2 className="text-center text-3xl sm:text-4xl lg:text-6xl font-medium max-w-full sm:max-w-3xl mx-auto mb-12 sm:mb-20 leading-tight px-4">
                        Everything you need to sell, scale, and succeed
                    </h2>

                    {/* STEP 16: Feature cards - 1 column mobile, 2 tablet, 4 desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12 sm:pb-20">
                        <div className="bg-gray-100 rounded-md px-5 py-9">
                            <Image src="/asset/pipeline-builder.svg" alt="pipeline logo" width={37} height={37} className="mx-auto mb-3"/>
                            <p className="text-xl sm:text-2xl font-medium text-center mb-3">Pipeline Builder</p>
                            <p className="text-xs text-center text-gray-500">Build pipeline faster with better data, smarter AI, and easier automation.</p>
                        </div>

                        <div className="bg-gray-100 rounded-md px-5 py-9">
                            <Image src="/asset/call-assistant.svg" alt="call logo" width={37} height={37} className="mx-auto mb-3"/>
                            <p className="text-xl sm:text-2xl font-medium text-center mb-3">Call Assistant</p>
                            <p className="text-xs text-center text-gray-500">Close every winnable deal with call recordings, meeting scheduling, and AI insights.</p>
                        </div>

                        <div className="bg-gray-100 rounded-md px-5 py-9">
                            <Image src="/asset/data-enrichment.svg" alt="data logo" width={37} height={37} className="mx-auto mb-3"/>
                            <p className="text-xl sm:text-2xl font-medium text-center mb-3">Data Enrichment</p>
                            <p className="text-xs text-center text-gray-500">Keep your CRM and marketing automation data up to date, all the time.</p>
                        </div>

                        <div className="bg-gray-100 rounded-md px-5 py-9">
                            <Image src="/asset/pipeline-builder.svg" alt="market logo" width={37} height={37} className="mx-auto mb-3"/>
                            <p className="text-xl sm:text-2xl font-medium text-center mb-3">Go-To-Market Platform</p>
                            <p className="text-xs text-center text-gray-500">Manage your entire end-to-end sales cycle in Apollo - your ultimate command center.</p>
                        </div>
                    </div>

                    {/* STEP 17: Stats section - stack vertically on mobile */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10">
                        <div className="max-w-full sm:max-w-2xs">
                            <p className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-7">The fastest growing businesses use Apollo</p>
                            <p className="text-sm">Over 500,000 companies use Apollo to stay ahead of the competition.</p>
                        </div>
                        <p className="text-6xl sm:text-7xl lg:text-9xl text-slate-900 font-bold">500K+</p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CTA SECTION */}
            {/* STEP 18: Stack content and image vertically on mobile */}
            <section>
                <div className="bg-yellow-200 mt-3 pt-5 grid grid-cols-1 lg:grid-cols-2 items-start gap-8 px-4 sm:px-7 rounded-xl mb-10 pb-8 lg:pb-0">
                    <div className="w-full lg:max-w-xl">
                        <p className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 lg:mb-15 pt-8 sm:pt-12 lg:pt-15 font-medium leading-tight">
                            The best sales platform in the world, at an (almost) unbelievable value
                        </p>
                        <p className="mb-7 text-sm sm:text-[15px] leading-relaxed">
                            You don&apos;t have to spend a fortune to run a world-class revenue-generating machine. Replace ZoomInfo, Outreach, Salesloft, Gong, Chili Piper, and more with Apollo to cut costs and get better results.
                        </p>
                        
                        {/* STEP 19: Stack buttons vertically on mobile */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <Button className="py-5 sm:py-6 px-6 bg-black font-normal hover:bg-gray-800 duration-300 cursor-pointer text-sm sm:text-base w-full sm:w-auto">
                                See pricing
                            </Button>
                            <Button className="bg-transparent text-black font-normal border border-black hover:bg-gray-200 duration-300 px-5 py-5 sm:py-6 text-sm sm:text-base cursor-pointer w-full sm:w-auto">
                                Get started for free
                            </Button>
                        </div>
                    </div>

                    {/* STEP 20: Responsive image sizing */}
                    <div className="w-full flex justify-center lg:justify-end">
                        <Image 
                            src="/asset/footer.svg" 
                            alt="pricing illustration" 
                            width={600} 
                            height={400} 
                            className="w-full max-w-md lg:max-w-full h-auto"
                        />
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default Apollo;