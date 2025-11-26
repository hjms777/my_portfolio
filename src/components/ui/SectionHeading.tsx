import React from 'react';

interface SectionHeadingProps {
    children: React.ReactNode;
    className?: string;
}

export function SectionHeading({ children, className = '' }: SectionHeadingProps) {
    return (
        <h2 className={`text-3xl font-bold tracking-tight text-foreground mb-12 text-center ${className}`}>
            {children}
        </h2>
    );
}
