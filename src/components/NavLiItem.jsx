import React from "react";

const NavLiItem = ({ children }) => {
    return (
        <li className="text-sm font-bold text-neutral-g-2/90 cursor-pointer hover:opacity-70 transition duration-300">
            {children}
        </li>
    );
};

export default NavLiItem;
