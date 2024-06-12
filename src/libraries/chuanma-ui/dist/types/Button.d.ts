import React from 'react';

interface ButtonProps {
    text?: string;
    variant: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
}

declare const Button: React.FC<ButtonProps>;

export { Button as default };
