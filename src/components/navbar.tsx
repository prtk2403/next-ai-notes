import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import github from "@/app/assets/github-mark-white.svg"
import logo from "@/app/assets/logo.svg";

export const Navbar = () => {
    return (
        <div className="p-4 shadow w-full">
            <div className="flex flex-wrap items-center justify-between">
                <Link href="/" className=" items-center gap-1 flex">
                    <Image src={logo} alt="NoteGenie" width={30} height={30} />
                    <span className="font-bold text-[#e2e1ef]">NoteGenie</span>
                </Link>
                <div className="flex justify-center items-center gap-8">
                <Link href="#features" className="text-[#e2e1ef] font-bold"> Features </Link>
                <Link href="/about" className="text-[#e2e1ef] font-bold"> About </Link>
                <Link href="/contact" className="text-[#e2e1ef] font-bold"> Contact Us </Link>
                </div>
                <div className="flex items-center gap-3">
                   <Link href="https://github.com/prtk2403/next-ai-notes" target="_blank">
                        <Image
                        src={github}
                        alt="Github"
                        width={30}
                        height={30}
                        />
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
