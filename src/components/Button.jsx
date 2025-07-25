import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className }) => {
    return (
        <button type="button"
            className={twMerge(
                "text-[0.8rem] font-medium px-8 py-3 rounded-full shadow-md cursor-pointer hover:opacity-80 transition duration-300",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
