import Image from "next/image";
import SocialLink from "./social-link";
export default function About() {
    return (
        <div className="w-full md:w-10/12 flex gap-20">
            <div>
                <Image src="/profile-pic.jpg" alt="louis nguyen" width={1000} height={50} layout="intrinsic" className="rounded-full" />
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold">Made by Louis Nguyen</h1>
                <p>I am an independent software developer who is passionate about building useful stuff.</p>
                <p>I am really into nootropics and cognitive enhancements in general. 
                    However, I encounter several problems while researching nootropics and vendors. 
                    Is this vendor reliable? Do they provide lab reports? Price comparison? 
                    Where to find this particular rare nootropic? etc.</p>
                <p>This is why I decided to build this website - scratching my own itch and hopefully helping others out there who are having the same problems.</p>
                <p>I have plans to add much more information and features to this website. Stay tuned!</p>
                <div className="flex flex-col gap-5">
                    <p>If you find this website useful, please consider buying me a coffee. It would mean a lot to me!</p>
                    <button className="bg-blue-800 text-slate-200 rounded-md p-5 w-fit font-bold"><a href="https://buymeacoffee.com/louisng" target="_blank" rel="noopener noreferrer">Buy me a coffee</a></button>
                </div>
                <div className="mt-10 flex flex-col gap-2">
                    <SocialLink iconSrc="/x-logo.svg" href="https://x.com/louis_lamnguyen" text="Join me on X / Twitter" />
                    <SocialLink iconSrc="/rocket.svg" href="https://louis-nguyen.me" text="Check out my website" />
                </div>
            </div>
            
            
        </div>
    )
}