'use client'
import "./globals.css";
import NiceModal from "@ebay/nice-modal-react";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <NiceModal.Provider>
                <body
                    className={`antialiased`}
                >
                    {children}
                </body>
            </NiceModal.Provider>
        </html>
    );
}
