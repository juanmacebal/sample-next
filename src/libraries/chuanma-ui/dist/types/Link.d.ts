import React from 'react';

interface LinkProps {
    text: string;
    onClick: () => void;
}

declare const Link: React.FC<LinkProps>;

export { Link as default };
