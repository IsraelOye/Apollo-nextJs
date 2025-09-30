
// import { Button } from "@/components/ui/button";
// import { BsFan } from "react-icons/bs";

// const Navbar = () => {
//     return (
//         <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-5 bg-background-3 flex items-center justify-between">
//             <div className="flex items-center space-x-12">
//                 <div className="flex items-center gap-1.5">
//                     <BsFan className="text-background-4 text-2xl" />
//                     <p className="text-2xl font-medium">Apollo</p>
//                 </div>

//                 <div className="flex items-center gap-7 text-sm">
//                     <p className="hover:text-gray-500 duration-300 cursor-pointer">Platform</p>
//                     <p className="hover:text-gray-500 duration-300 cursor-pointer">Roles</p>
//                     <p className="hover:text-gray-500 duration-300 cursor-pointer">Resources</p>
//                     <p className="hover:text-gray-500 duration-300 cursor-pointer">Pricing</p>
//                 </div>
//             </div>

//             <div className="flex items-center gap-5">
//                 <p className="text-sm hover:text-gray-500 duration-300 cursor-pointer">Log in</p>
//                 <Button className="bg-background-3 text-black font-normal border border-black hover:bg-gray-200 duration-300">
//                     Get a demo
//                 </Button>
//                 <Button className="font-normal bg-background-4 text-black hover:bg-yellow-100 duration-300" size="lg">
//                     Sign up for free
//                 </Button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import { Button } from "@/components/ui/button";
import { BsFan } from "react-icons/bs";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-5 bg-background-3">
            {/* STEP 1: Main navbar container - flex items stay horizontal */}
            <div className="flex items-center justify-between">
                
                {/* STEP 2: Logo - always visible on all screens */}
                <div className="flex items-center gap-1.5">
                    <BsFan className="text-background-4 text-2xl" />
                    <p className="text-2xl font-medium">Apollo</p>
                </div>

                {/* STEP 3: Desktop Navigation Links - hidden on mobile (hidden), visible on large screens (lg:flex) */}
                <div className="hidden lg:flex items-center gap-7 text-sm">
                    <p className="hover:text-gray-500 duration-300 cursor-pointer">Platform</p>
                    <p className="hover:text-gray-500 duration-300 cursor-pointer">Roles</p>
                    <p className="hover:text-gray-500 duration-300 cursor-pointer">Resources</p>
                    <p className="hover:text-gray-500 duration-300 cursor-pointer">Pricing</p>
                </div>

                {/* STEP 4: Desktop Buttons - hidden on mobile, visible on medium screens and up */}
                <div className="hidden md:flex items-center gap-3 lg:gap-5">
                    <p className="text-sm hover:text-gray-500 duration-300 cursor-pointer">Log in</p>
                    <Button className="bg-background-3 text-black font-normal border border-black hover:bg-gray-200 duration-300 text-xs lg:text-sm px-3 lg:px-4">
                        Get a demo
                    </Button>
                    <Button className="font-normal bg-background-4 text-black hover:bg-yellow-100 duration-300 text-xs lg:text-sm" size="lg">
                        Sign up for free
                    </Button>
                </div>

                {/* STEP 5: Mobile Menu Button - visible only on mobile (md:hidden) */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-2xl p-2 hover:bg-gray-100 rounded-lg duration-300"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* STEP 6: Mobile Menu Dropdown - only shows when isMenuOpen is true */}
            {/* Positioned absolute, full width, slides down from navbar */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background-3 border-t border-gray-200 shadow-lg">
                    {/* STEP 7: Mobile menu items - stacked vertically with padding */}
                    <div className="flex flex-col p-5 space-y-4">
                        {/* Navigation Links */}
                        <p className="hover:text-gray-500 duration-300 cursor-pointer py-2">Platform</p>
                        <p className="hover:text-gray-500 duration-300 cursor-pointer py-2">Roles</p>
                        <p className="hover:text-gray-500 duration-300 cursor-pointer py-2">Resources</p>
                        <p className="hover:text-gray-500 duration-300 cursor-pointer py-2">Pricing</p>
                        
                        {/* Divider line */}
                        <div className="border-t border-gray-200 my-2"></div>
                        
                        {/* Auth buttons stacked vertically on mobile */}
                        <p className="hover:text-gray-500 duration-300 cursor-pointer py-2">Log in</p>
                        <Button className="w-full bg-background-3 text-black font-normal border border-black hover:bg-gray-200 duration-300">
                            Get a demo
                        </Button>
                        <Button className="w-full font-normal bg-background-4 text-black hover:bg-yellow-100 duration-300">
                            Sign up for free
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;