import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png"
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


export const Navbar = () => {
    return (
        <div className="p-4 shadow">
            <div className="flex flex-wrap items-center justify-between">
                <Link href="/notes" className=" items-center gap-1 flex">
                    <Image src={logo} alt="NoteGenie" width={50} height={50} />
                    <span className="font-bold">NoteGenie</span>
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
                    <Button>
                        <Plus size={20} className="mr-2" />
                        Add Note
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;