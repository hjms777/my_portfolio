import LNB from '@/components/LNB';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LNB />
            <main className="ml-48 p-4">{children}</main>
        </>
    );
}
