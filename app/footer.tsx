import Image from "next/image";
const Footer = () => {
    return (
        <div className="px-7">
            <div className="grid grid-cols-4 gap-20 itmes-start pt-20 px-10">
                <Image src="/asset/logo.svg" alt="apollo logo" width={250} height={28}/>

                <div className="space-y-3 text-sm">
                    <p className="font-medium">Get started</p>
                    <p>Sign up for free</p>
                    <p>Pricing</p>
                    <p>Request a demo</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium">Product</p>
                    <p>Pipeline Builder</p>
                    <p>Call Assistant</p>
                    <p>Data Enrichment</p>
                    <p>Go-To-Market Platform</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium">Platform</p>
                    <p>Living Data Network</p>
                    <p>Apollo AI</p>
                    <p>Integrations</p>
                    <p>Chrome extension</p>
                    <p>Workflow Automation</p>
                    <p>Security</p>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-20 itmes-start pt-20 px-10">
                <div className="space-y-3 text-sm">
                    <p className="font-medium">Apollo © 2025</p>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Don't Sell My Info</p>
                    <p>About Apollo</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium">Roles</p>
                    <p>Sales Leaders</p>
                    <p>Account Executives</p>
                    <p>Sales Development</p>
                    <p>Founders</p>
                    <p>Marketing</p>
                    <p>Revenue Operations</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium">Use Cases</p>
                    <p>B2B Database</p>
                    <p>Lead Scoring</p>
                    <p>Inbound Lead Router</p>
                    <p>Sales Engagement</p>
                    <p>Meetings Scheduler</p>
                    <p>Deal Management</p>
                    <p>Conversion Intelligence</p>
                    <p>Sales Analytics</p>
                    <p>Sales Coaching</p>
                </div>

                <div className="space-y-3 text-sm">
                    <p className="font-medium">Resources</p>
                    <p>Apollo Academy</p>
                    <p>Magazine</p>
                    <p>Insights</p>
                    <p>Partners</p>
                    <p>Knowledge Base</p>
                    <p>Webinars</p>
                    <p>Success Stories</p>
                    <p>Privacy Center</p>
                    <p>API Docs</p>
                    <p>Join Our Community</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;