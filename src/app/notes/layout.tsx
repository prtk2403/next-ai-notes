import Navbar from "./_components/navbar";

export default function NotesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="m-auto max-w-7xl p-4">
                {children}
            </main>
        </>
    )
}