import { SignedIn } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata : Metadata={
    title: "NoteGenie - Notes",
    description: "Supercharge your notes with the power of AI",
}
export const NotesPage = () =>{
    return (
        <div className="text-[#e2e1ef] bg-[#0a0a14]">
            Hello
        </div>
    )
}

export default NotesPage;