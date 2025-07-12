'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="w-9 h-9">
                <div className="h-4 w-4" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label={t('nav.toggleTheme')}
        >
            {theme === 'light' ? (
                <Moon className="h-4 w-4 transition-transform duration-200" />
            ) : (
                <Sun className="h-4 w-4 transition-transform duration-200 text-white" />
            )}
        </Button>
    );
}