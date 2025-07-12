import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import { QueryProvider } from '@/providers/query-provider';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { I18nProvider } from '@/providers/i18n-provider';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
});

export const metadata: Metadata = {
    title: 'Corner Softwares - Digital Transformation Experts',
    description: 'Transform your business with our comprehensive digital solutions. From strategy to implementation, we guide your digital journey.',
    keywords: 'digital transformation, software development, minimalist design, modern solutions',
    authors: [{ name: 'Corner Softwares' }],
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body className={`${inter.variable} font-sans antialiased`}>
        <ErrorBoundary>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <I18nProvider>
                    <QueryProvider>
                        {children}
                    </QueryProvider>
                </I18nProvider>
            </ThemeProvider>
        </ErrorBoundary>
        </body>
        </html>
    );
}