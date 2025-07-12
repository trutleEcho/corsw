import {LucideIcon} from "lucide-react";

export interface TransformationMetric {
    value: string;
    label: string;
}

export interface TransformationStepData {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: LucideIcon;
    interactiveTitle: string;
    interactiveDescription: string;
    metrics?: TransformationMetric[];
}