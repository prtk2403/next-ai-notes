import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.svg"
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


export const Navbar = () => {
    return (
        <div className="p-4 shadow bg-[#0a0a14]">
            <div className="flex flex-wrap items-center justify-between">
                <Link href="/notes" className=" items-center gap-1 flex">
                    <Image src={logo} alt="NoteGenie" width={30} height={30} />
                    <span className="font-bold text-[#e2e1ef]">NoteGenie</span>
                </Link>
                <div className="flex items-center gap-3">
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: {
                                    width: "2.5rem",
                                    height: "2.5rem"
                                }
                            }
                        }}
                    />
                    <Button className="bg-[#534ebc] hover:bg-[#534ebc]">
                        <Plus size={20} className="mr-2" />
                        Add Note
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;