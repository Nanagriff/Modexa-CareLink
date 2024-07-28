// List.tsx
import React from 'react';

interface ListProps {
    children: React.ReactNode;
}

export function List({ children }: ListProps) {
    return (
        <ul className="list-none p-0">
            {children}
        </ul>
    );
}


interface ListItemProps {
    children: React.ReactNode;
    className?: string;
}

export function ListItem({ children, className }: ListItemProps) {
    return (
        <li className={`p-2 border-b border-gray-200 ${className}`}>
            {children}
        </li>
    );
}

interface ListItemTextProps {
    children: React.ReactNode;
}

export function ListItemText({ children }: ListItemTextProps) {
    return (
        <span className="text-gray-700">
            {children}
        </span>
    );
}
