import React from 'react';

interface ButtonProps {
    text?: string;
    variant: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
}

declare const Button: React.FC<ButtonProps>;

interface LinkProps {
    text: string;
    onClick: () => void;
}

declare const Link: React.FC<LinkProps>;

export { Button, Link };
