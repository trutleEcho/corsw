"use client";
import { Mail, Phone, Clock } from "lucide-react";

export function SimpleCenteredContactForm() {
    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        console.log(target);
    };

    const services = [
        "Web Development",
        "Mobile Apps",
        "E-commerce Solutions",
        "Cloud Solutions",
        "UI/UX Design",
        "Custom Software"
    ];

    const budgetRanges = [
        "$10,000 - $25,000",
        "$25,000 - $50,000",
        "$50,000 - $100,000",
        "$100,000+"
    ];

    return (
        <div className="w-full flex items-center justify-center min-h-screen py-12">
            <div className="flex relative px-4 z-20 items-start w-full justify-center max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-border px-8 py-10 rounded-lg shadow-2xl">
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold text-primary mb-4">
                                    Let&apos;s Build Something Amazing Together
                                </h1>
                                <p className="text-muted-foreground text-lg">
                                    Ready to start your next software project? Get in touch with our team.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-primary mb-2"
                                        >
                                            Name *
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            placeholder="Your full name"
                                            className="block w-full bg-input border border-border px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-primary mb-2"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="your@email.com"
                                            className="block w-full bg-input border border-border px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-primary mb-2"
                                    >
                                        Company
                                    </label>
                                    <input
                                        id="company"
                                        type="text"
                                        placeholder="Your company name"
                                        className="block w-full bg-input border border-border px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="project-type"
                                            className="block text-sm font-medium text-primary mb-2"
                                        >
                                            Project Type
                                        </label>
                                        <select
                                            id="project-type"
                                            className="block w-full bg-input border border-border px-4 py-3 rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-colors"
                                        >
                                            <option value="" className="text-muted-foreground">Select a service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service} className="text-muted-foreground">
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="budget"
                                            className="block text-sm font-medium text-primary mb-2"
                                        >
                                            Budget Range
                                        </label>
                                        <select
                                            id="budget"
                                            className="block w-full bg-input border border-border px-4 py-3 rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-colors"
                                        >
                                            <option value="" className="text-muted-foreground">Select budget range</option>
                                            {budgetRanges.map((range) => (
                                                <option key={range} value={range} className="text-muted-foreground">
                                                    {range}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-primary mb-2"
                                    >
                                        Project Description *
                                    </label>
                                    <textarea
                                        rows={5}
                                        id="description"
                                        required
                                        placeholder="Tell us about your project, goals, and requirements..."
                                        className="block w-full bg-input border border-border px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-colors resize-vertical"
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="bg-primary/10 hover:bg-primary/90 text-accent-foreground text-lg transition-colors duration-200 rounded-lg px-8 py-4 flex items-center justify-center w-full font-[var(--font-inter)]"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="border border-border px-6 py-8 rounded-lg h-fit">
                            <h2 className="text-xl font-bold text-primary mb-6 font-[var(--font-inter)]">
                                Get In Touch
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-primary mb-1">Email</h3>
                                        <p className="text-muted-foreground">hello@cornersoftware.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-primary mb-1">Phone</h3>
                                        <p className="text-muted-foreground">+91 9175395577</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-primary mb-1">Office Hours</h3>
                                        <p className="text-muted-foreground">Monday - Friday</p>
                                        <p className="text-muted-foreground">9 AM - 6 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    We typically respond within 24 hours. For urgent inquiries, please call us directly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}