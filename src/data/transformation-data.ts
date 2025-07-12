import {
    Search,
    Target,
    Server,
    Palette,
    Globe,
    TrendingUp
} from 'lucide-react';
import type { TransformationStepData } from '@/types/transformation';

export const transformationSteps: TransformationStepData[] = [
    {
        id: 'business-analysis',
        title: 'Business Analysis',
        description: 'We start by understanding your current business landscape, identifying pain points, and uncovering opportunities for digital transformation.',
        features: [
            'Comprehensive business audit',
            'Process mapping and optimization',
            'Technology gap analysis',
            'Competitive landscape review'
        ],
        icon: Search,
        interactiveTitle: 'Discovery Process',
        interactiveDescription: 'Our data-driven approach reveals insights that drive transformation success.',
        metrics: [
            { value: '95%', label: 'Accuracy Rate' },
            { value: '2-3 weeks', label: 'Analysis Timeline' }
        ]
    },
    {
        id: 'strategic-planning',
        title: 'Strategic Planning',
        description: 'Based on our analysis, we develop a comprehensive roadmap that aligns technology initiatives with your business objectives.',
        features: [
            'Digital transformation roadmap',
            'Technology stack recommendations',
            'Timeline and milestone planning',
            'ROI projections and KPIs'
        ],
        icon: Target,
        interactiveTitle: 'Strategic Roadmap',
        interactiveDescription: 'Visual timeline showing your transformation journey from start to success.',
        metrics: [
            { value: '6-18 months', label: 'Typical Timeline' },
            { value: '300%', label: 'Avg ROI' }
        ]
    },
    {
        id: 'digital-infrastructure',
        title: 'Digital Infrastructure',
        description: 'We build robust, scalable infrastructure that serves as the foundation for your digital transformation.',
        features: [
            'Cloud architecture design',
            'Microservices implementation',
            'API development and integration',
            'Security and compliance setup'
        ],
        icon: Server,
        interactiveTitle: 'Tech Stack',
        interactiveDescription: 'Modern, scalable architecture built for growth and performance.',
        metrics: [
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '50ms', label: 'Response Time' }
        ]
    },
    {
        id: 'brand-identity',
        title: 'Brand Identity',
        description: 'We craft compelling brand experiences that resonate with your audience and differentiate you in the digital landscape.',
        features: [
            'Brand strategy development',
            'Visual identity design',
            'Brand guidelines creation',
            'Digital asset library'
        ],
        icon: Palette,
        interactiveTitle: 'Brand Transformation',
        interactiveDescription: 'See how we transform brands to create memorable digital experiences.',
        metrics: [
            { value: '85%', label: 'Brand Recognition Increase' },
            { value: '40%', label: 'Engagement Boost' }
        ]
    },
    {
        id: 'online-presence',
        title: 'Online Presence',
        description: 'We create powerful digital experiences across all touchpoints, from websites to mobile applications.',
        features: [
            'Responsive web development',
            'Mobile app creation',
            'E-commerce platforms',
            'SEO optimization'
        ],
        icon: Globe,
        interactiveTitle: 'Multi-Device Experience',
        interactiveDescription: 'Seamless experiences across desktop, tablet, and mobile devices.',
        metrics: [
            { value: '150%', label: 'Traffic Increase' },
            { value: '65%', label: 'Conversion Rate' }
        ]
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'We implement data-driven marketing strategies that drive growth and maximize your return on investment.',
        features: [
            'Marketing automation setup',
            'Analytics and tracking',
            'Content marketing strategy',
            'Performance optimization'
        ],
        icon: TrendingUp,
        interactiveTitle: 'Growth Metrics',
        interactiveDescription: 'Track your digital marketing success with real-time analytics.',
        metrics: [
            { value: '250%', label: 'Lead Generation' },
            { value: '180%', label: 'Revenue Growth' }
        ]
    }
];