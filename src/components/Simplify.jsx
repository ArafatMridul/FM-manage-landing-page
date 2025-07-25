import React from "react";
import Button from "./Button";
import tablet from "/images/bg-tablet-pattern.svg";

const Simplify = () => {
    return (
        <section className=" bg-gradient-to-r from-primary-o to-primary-o/95">
            <div className="relative px-6 sm:px-20 lg:px-0 pt-25 lg:pt-16 pb-23 lg:pb-16 z-10 overflow-clip">
                <div className="wrapper relative z-40 lg:grid lg:grid-cols-2">
                    <div>
                        <h4 className="text-4xl lg:w-[450px] text-center lg:text-start px-2 text-neutral-g-1 font-semibold leading-[1.28] lg:leading-[1.35]">
                            Simplify how your team works today.
                        </h4>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                        <Button className="bg-white text-primary-o">
                            Get Started
                        </Button>
                    </div>
                </div>
                <img
                    src={tablet}
                    alt="tablet illustration"
                    className="absolute z-20 scale-150 sm:scale-80 -bottom-24 -left-92 sm:-left-130 sm:-bottom-90 opacity-10 lg:scale-70 lg:left-10 lg:-bottom-110"
                />
                <img
                    src={tablet}
                    alt="tablet illustration"
                    className="hidden lg:block absolute z-20 opacity-10 lg:scale-70 lg:-right-112 lg:-top-140"
                />
            
            </div>
        </section>
    );
};

export default Simplify;
