import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata : Metadata={
    title: "NoteGenie - Sign Up",
    description: "Supercharge your notes with the power of AI",
}
export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp 

      />
    </div>
  )
}