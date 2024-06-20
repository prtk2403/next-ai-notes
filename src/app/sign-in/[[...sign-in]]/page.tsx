import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata : Metadata={
    title: "NoteGenie - Sign In",
    description: "Supercharge your notes with the power of AI",
}
export default function SignInPage() {
  return (
  <div className="flex h-screen items-center justify-center">
  <SignIn />
</div>
  )
}