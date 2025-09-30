import { Button } from "@/components/ui/button";
import { BsFan } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-5 bg-background-3 flex items-center justify-between">
            <div className="flex items-center space-x-12">
                <div className="flex items-center gap-1.5">
                    <BsFan className="text-background-4 text-2xl" />
                    <p className="text-2xl font-medium">Apollo</p>
                </div>

                <div className="flex items-center gap-7 text-sm">
                    <p className="hover:text-gray-500 duration-300 cursor-pointer">Platform</p>
                    <p className="hover:text-gray-500 duration-300 cursor-pointer">Roles</p>
                    <p className="hover:text-gray-500 duration-300 cursor-pointer">Resources</p>
                    <p className="hover:text-gray-500 duration-300 cursor-pointer">Pricing</p>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <p className="text-sm hover:text-gray-500 duration-300 cursor-pointer">Log in</p>
                <Button className="bg-background-3 text-black font-normal border border-black hover:bg-gray-200 duration-300">
                    Get a demo
                </Button>
                <Button className="font-normal bg-background-4 text-black hover:bg-yellow-100 duration-300" size="lg">
                    Sign up for free
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;