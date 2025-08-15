import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import { QueryProvider } from '@/providers/query-provider';
import { I18nProvider } from '@/providers/i18n-provider';
import {Navigation} from "@/components/navigation/navigation";
import {Footer} from "@/components/layout/footer";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
});

export const metadata: Metadata = {
    title: {
        default: 'Corner Software - Innovative Software Solutions & Development',
        template: '%s | Corner Software'
    },
    description: 'Leading software development company specializing in web applications, mobile apps, IoT solutions, digital marketing, and cloud infrastructure. Transform your business with cutting-edge technology.',
    keywords: [
        'Corner Software',
        'software development',
        'web development',
        'mobile app development',
        'IoT solutions',
        'digital marketing',
        'cloud infrastructure',
        'custom software',
        'tech consulting',
        'enterprise solutions',
        'startup development',
        'full-stack development',
        'React development',
        'Node.js development',
        'API development',
        'database design',
        'UI/UX design',
        'DevOps services',
        'scalable applications',
        'modern web technologies'
    ],
    authors: [{ name: 'Corner Software', url: 'https://corsw.com' }],
    creator: 'Corner Software',
    publisher: 'Corner Software',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://corsw.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Corner Software - Innovative Software Solutions & Development',
        description: 'Leading software development company specializing in web applications, mobile apps, IoT solutions, digital marketing, and cloud infrastructure.',
        url: 'https://corsw.com',
        siteName: 'Corner Software',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Corner Software - Innovative Software Solutions',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Corner Software - Innovative Software Solutions & Development',
        description: 'Leading software development company specializing in web applications, mobile apps, IoT solutions, digital marketing, and cloud infrastructure.',
        site: '@corsw',
        creator: '@corsw',
        images: ['/twitter-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
    category: 'technology',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head>
            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

            {/* Favicon and icons */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" type="image/png" sizes="32x32" href="/CORSW_BG_DARK_64x64.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/CORSW_BG_DARK_32x32.png" />
            <link rel="apple-touch-icon" href="/apple-icon.png" />
            <link rel="manifest" href="/manifest.json" />

            {/* Theme color */}
            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-TileColor" content="#000000" />

            {/* Additional SEO meta tags */}
            <meta name="geo.region" content="IN" />
            <meta name="geo.country" content="India" />
            <meta name="language" content="English" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Corner Software",
                        "url": "https://corsw.com",
                        "logo": "https://corsw.com/logo.png",
                        "description": "Leading software development company specializing in web applications, mobile apps, IoT solutions, digital marketing, and cloud infrastructure.",
                        "foundingDate": "2020",
                        "founder": {
                            "@type": "Person",
                            "name": "Corner Software Team"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "India"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-9175395577",
                            "contactType": "customer service",
                            "availableLanguage": "English"
                        },
                        "sameAs": [
                            "https://twitter.com/corsw",
                            "https://linkedin.com/company/corsw",
                            "https://github.com/corsw"
                        ],
                        "service": [
                            {
                                "@type": "Service",
                                "name": "Web Development",
                                "description": "Custom web application development using modern technologies"
                            },
                            {
                                "@type": "Service",
                                "name": "Mobile App Development",
                                "description": "Native and cross-platform mobile application development"
                            },
                            {
                                "@type": "Service",
                                "name": "IoT Solutions",
                                "description": "Internet of Things development and integration services"
                            },
                            {
                                "@type": "Service",
                                "name": "Digital Marketing",
                                "description": "Comprehensive digital marketing and SEO services"
                            }
                        ]
                    })
                }}
            />
        </head>
        <body className={`${inter.variable} font-sans antialiased`}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <I18nProvider>
                    <QueryProvider>
                        <Navigation/>
                        {children}
                        <Footer/>
                    </QueryProvider>
                </I18nProvider>
            </ThemeProvider>
        </body>
        </html>
    );
}