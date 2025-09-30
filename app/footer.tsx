// import Image from "next/image";
// const Footer = () => {
//     return (
//         <div className="px-7">
//             <div className="grid grid-cols-4 gap-20 itmes-start pt-20 px-10">
//                 <Image src="/asset/logo.svg" alt="apollo logo" width={250} height={28}/>

//                 <div className="space-y-3 text-sm">
//                     <p className="font-medium">Get started</p>
//                     <p>Sign up for free</p>
//                     <p>Pricing</p>
//                     <p>Request a demo</p>
//                 </div>

//                 <div className="space-y-3 text-sm">
//                     <p className="font-medium">Product</p>
//                     <p>Pipeline Builder</p>
//                     <p>Call Assistant</p>
//                     <p>Data Enrichment</p>
//                     <p>Go-To-Market Platform</p>
//                 </div>

//                 <div className="space-y-3 text-sm">
//                     <p className="font-medium">Platform</p>
//                     <p>Living Data Network</p>
//                     <p>Apollo AI</p>
//                     <p>Integrations</p>
//                     <p>Chrome extension</p>
//                     <p>Workflow Automation</p>
//                     <p>Security</p>
//                 </div>
//             </div>

//             <div className="grid grid-cols-4 gap-20 itmes-start pt-20 px-10">
//                 <div className="space-y-3 text-sm">
//                     <p className="font-medium">Apollo © 2025</p>
//                     <p>Privacy Policy</p>
//                     <p>Terms</p>
//                     <p>Don't Sell My Info</p>
//                     <p>About Apollo</p>
//                 </div>

//                 <div className="space-y-3 text-sm">
//                     <p className="font-medium">Roles</p>
//                     <p>Sales Leaders</p>
//                     <p>Account Executives</p>
//                     <p>Sales Development</p>
//                     <p>Founders</p>
//                     <p>Marketing</p>
//                     <p>Revenue Operations</p>
//                 </div>

//                 <div className="space-y-3 text-sm">
//                     <p className="font-medium">Use Cases</p>
//                     <p>B2B Database</p>
//                     <p>Lead Scoring</p>
//                     <p>Inbound Lead Router</p>
//                     <p>Sales Engagement</p>
//                     <p>Meetings Scheduler</p>
//                     <p>Deal Management</p>
//                     <p>Conversion Intelligence</p>
//                     <p>Sales Analytics</p>
//                     <p>Sales Coaching</p>
//                 </div>

//                 <div className="space-y-3 text-sm">
//                     <p className="font-medium">Resources</p>
//                     <p>Apollo Academy</p>
//                     <p>Magazine</p>
//                     <p>Insights</p>
//                     <p>Partners</p>
//                     <p>Knowledge Base</p>
//                     <p>Webinars</p>
//                     <p>Success Stories</p>
//                     <p>Privacy Center</p>
//                     <p>API Docs</p>
//                     <p>Join Our Community</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer;


import Image from "next/image";

const Footer = () => {
    return (
        <div className="px-4 sm:px-7 py-10">
            {/* STEP 1: Responsive Grid - Changes columns based on screen size */}
            {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20 pt-10 lg:pt-20 px-4 sm:px-6 lg:px-10">
                
                {/* STEP 2: Logo Section - Full width on mobile, normal on desktop */}
                <div className="mb-6 sm:mb-0">
                    <Image 
                        src="/asset/logo.svg" 
                        alt="apollo logo" 
                        width={200}  // Smaller on mobile
                        height={28}
                        className="w-40 sm:w-48 lg:w-[250px]" // Responsive width
                    />
                </div>

                {/* STEP 3: Footer Links - Stack vertically on mobile, side-by-side on larger screens */}
                <div className="space-y-3 text-sm">
                    <p className="font-medium text-base">Get started</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Sign up for free</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Pricing</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Request a demo</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium text-base">Product</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Pipeline Builder</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Call Assistant</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Data Enrichment</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Go-To-Market Platform</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium text-base">Platform</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Living Data Network</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Apollo AI</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Integrations</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Chrome extension</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Workflow Automation</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Security</p>
                </div>
            </div>

            {/* STEP 4: Second Grid Section - Same responsive pattern */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20 pt-10 lg:pt-20 px-4 sm:px-6 lg:px-10">
                
                <div className="space-y-3 text-sm">
                    <p className="font-medium text-base">Apollo © 2025</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Privacy Policy</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Terms</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Don&apos;t Sell My Info</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">About Apollo</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium text-base">Roles</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Sales Leaders</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Account Executives</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Sales Development</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Founders</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Marketing</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Revenue Operations</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium text-base">Use Cases</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">B2B Database</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Lead Scoring</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Inbound Lead Router</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Sales Engagement</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Meetings Scheduler</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Deal Management</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Conversion Intelligence</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Sales Analytics</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Sales Coaching</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium text-base">Resources</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Apollo Academy</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Magazine</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Insights</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Partners</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Knowledge Base</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Webinars</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Success Stories</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Privacy Center</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">API Docs</p>
                    <p className="hover:text-gray-500 cursor-pointer duration-200">Join Our Community</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;