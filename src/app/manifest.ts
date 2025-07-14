import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Corner Software',
        short_name: 'Corner',
        description: 'Professional software development and digital solutions. We build cutting-edge applications, websites, and digital experiences that drive business growth.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        orientation: 'portrait-primary',
        scope: '/',
        lang: 'en-US',
        dir: 'ltr',
        categories: ['business', 'productivity', 'developer'],
        id: 'corner-software-pwa',
        icons: [
            {
                src: '/icons/icon-72x72.png',
                sizes: '72x72',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icons/icon-96x96.png',
                sizes: '96x96',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icons/icon-128x128.png',
                sizes: '128x128',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icons/icon-144x144.png',
                sizes: '144x144',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icons/icon-152x152.png',
                sizes: '152x152',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icons/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icons/icon-72x72.png',
                sizes: '72x72',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/icons/icon-96x96.png',
                sizes: '96x96',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/icons/icon-128x128.png',
                sizes: '128x128',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/icons/icon-144x144.png',
                sizes: '144x144',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/icons/icon-152x152.png',
                sizes: '152x152',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/icons/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/icons/icon-monochrome.svg',
                sizes: 'any',
                type: 'image/svg+xml',
                purpose: 'monochrome'
            }
        ],
        screenshots: [
            {
                src: '/screenshots/desktop-home.png',
                sizes: '1280x720',
                type: 'image/png',
                form_factor: 'wide',
                label: 'Corner Software - Professional Development Services'
            },
            {
                src: '/screenshots/mobile-home.png',
                sizes: '390x844',
                type: 'image/png',
                form_factor: 'narrow',
                label: 'Corner Software - Mobile Experience'
            },
            {
                src: '/screenshots/desktop-services.png',
                sizes: '1280x720',
                type: 'image/png',
                form_factor: 'wide',
                label: 'Our Development Services'
            },
            {
                src: '/screenshots/mobile-contact.png',
                sizes: '390x844',
                type: 'image/png',
                form_factor: 'narrow',
                label: 'Get in Touch'
            }
        ],
        shortcuts: [
            {
                name: 'Services',
                short_name: 'Services',
                description: 'View our software development services',
                url: '/services',
                icons: [
                    {
                        src: '/icons/shortcut-services.png',
                        sizes: '96x96'
                    }
                ]
            },
            {
                name: 'Portfolio',
                short_name: 'Portfolio',
                description: 'Explore our project portfolio',
                url: '/portfolio',
                icons: [
                    {
                        src: '/icons/shortcut-portfolio.png',
                        sizes: '96x96'
                    }
                ]
            },
            {
                name: 'Contact',
                short_name: 'Contact',
                description: 'Get in touch with our team',
                url: '/contact',
                icons: [
                    {
                        src: '/icons/shortcut-contact.png',
                        sizes: '96x96'
                    }
                ]
            },
            {
                name: 'About',
                short_name: 'About',
                description: 'Learn about Corner Software',
                url: '/about',
                icons: [
                    {
                        src: '/icons/shortcut-about.png',
                        sizes: '96x96'
                    }
                ]
            }
        ],
        related_applications: [
            {
                platform: 'webapp',
                url: 'https://corner-software.com'
            }
        ],
        prefer_related_applications: false,
        display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
        protocol_handlers: [
            {
                protocol: 'mailto',
                url: '/contact?email=%s'
            }
        ],
        file_handlers: [
            {
                action: '/tools/file-analyzer',
                accept: {
                    'application/json': ['.json'],
                    'text/javascript': ['.js', '.ts'],
                    'text/css': ['.css'],
                    'text/html': ['.html']
                }
            }
        ],
        launch_handler: {
            client_mode: ['focus-existing', 'auto']
        },
    }
}