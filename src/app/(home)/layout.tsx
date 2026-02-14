import LNB from '@/components/LNB';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LNB />
            <main className="p-4 md:ml-48">{children}</main>
        </>
    );
}
