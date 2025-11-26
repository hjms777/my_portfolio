import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${className}`}>
            {children}
        </div>
    );
}
