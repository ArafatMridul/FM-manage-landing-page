import React, { useEffect, useState } from "react";
import siteLogo from "/images/logo.svg";
import hamburger from "/images/icon-hamburger.svg";
import close from "/images/icon-close.svg";
import Button from "./Button";
import NavLiItem from "./NavLiItem";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <header className="relative z-50">
            <div className="wrapper flex items-center justify-between py-10 lg:py-14 px-6 sm:px-16 lg:px-0">
                <div>
                    <img
                        src={siteLogo}
                        alt="manage site logo"
                        className="w-29 lg:w-36"
                    />
                </div>

                {/* Hamburger / Close Icon */}
                <div
                    className="w-[25px] h-[18px] lg:hidden z-50 cursor-pointer"
                    onClick={() => setIsOpen((curr) => !curr)}
                >
                    <img
                        src={isOpen ? close : hamburger}
                        alt={isOpen ? "close icon" : "menu icon"}
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-8">
                        <NavLiItem>Pricing</NavLiItem>
                        <NavLiItem>Product</NavLiItem>
                        <NavLiItem>About Us</NavLiItem>
                        <NavLiItem>Careers</NavLiItem>
                        <NavLiItem>Community</NavLiItem>
                    </ul>
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <Button className="shadow-primary-o bg-primary-o text-neutral-o">
                        Get Started
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="lg:hidden fixed inset-0 bg-gradient-to-b from-transparent to-black/40 z-40"
                        />

                        {/* Slide-down Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="lg:hidden absolute left-6 right-6 py-10 rounded-sm bg-white z-50"
                        >
                            <ul className="flex flex-col items-center gap-6 font-medium text-neutral-g-2">
                                <li>Pricing</li>
                                <li>Product</li>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Community</li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
