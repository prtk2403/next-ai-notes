import { SignedIn } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata : Metadata={
    title: "NoteGenie - Notes",
    description: "Supercharge your notes with the power of AI",
}
export const NotesPage = () =>{
    return (
        <div>
            Hello
        </div>
    )
}

export default NotesPage;