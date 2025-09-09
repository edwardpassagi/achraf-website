import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Mohamed A. Belakhoua - Embedded Engineer',
    description: 'Embedded Engineer at OmniOn Power (formerly known as ABB) specializing in innovative solutions. Website created by Edward Passagi using Next.js and Tailwind CSS.',
    keywords: 'embedded engineer, OmniOn Power, ABB, Mohamed Belakhoua, engineering, Edward Passagi, Next.js, Tailwind CSS',
    authors: [
        { name: 'Mohamed Achraf Belakhoua' },
        { name: 'Edward Passagi', url: 'https://github.com/edwardpassagi' }
    ],
    creator: 'Edward Passagi',
    icons: {
        icon: '/achraf-website/images/icon.png',
        shortcut: '/achraf-website/images/icon.png',
        apple: '/achraf-website/images/icon.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    )
}