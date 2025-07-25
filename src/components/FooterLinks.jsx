import React from "react";
import { twMerge } from "tailwind-merge";

const FooterLinks = ({ children, className }) => {
    return (
        <p
            className={twMerge(
                "text-sm text-neutral-g-1 w-[120px] hover:text-primary-o transition duration-300 select-none cursor-pointer",
                className
            )}
        >
            {children}
        </p>
    );
};

export default FooterLinks;
