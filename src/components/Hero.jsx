import React from "react";
import heroBg from "/images/illustration-intro.svg";
import tablet from "/images/bg-tablet-pattern.svg";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="overflow-x-clip">
            <div className="wrapper">
                <div className="px-6 sm:px-16 lg:px-0 lg:grid lg:grid-cols-2">
                    <div className="relative lg:col-start-2">
                        <img
                            src={tablet}
                            alt="tablet decoration"
                            className="absolute scale-140 lg:scale-135 -top-44 lg:-top-32 -right-24 lg:-right-36 -z-10"
                        />
                        <img
                            src={heroBg}
                            alt="stats illustration"
                            className="w-full lg:mt-18"
                        />
                    </div>
                    <div className="relative text-center mt-8 sm:mt-20 lg:mt-30 sm:w-[480px] lg:w-[550px] sm:mx-auto lg:col-start-1 lg:row-start-1 lg:text-start">
                        <h1 className="text-4xl lg:text-[3.2rem] font-bold text-primary-b leading-[1.3]">
                            Bring everyone together to build better products.
                        </h1>
                        <p className="text-neutral-g-2/50 mt-3 sm:mt-6 leading-[1.7] lg:pr-50">
                            Manage makes it simple for software teams to plan
                            day-to-day tasks while keeping the larger team goals
                            in view.
                        </p>
                        <div className="mt-7 sm:mt-10 lg:mt-9">
                            <Button className="shadow-primary-o bg-primary-o text-neutral-o">
                                Get Started
                            </Button>
                        </div>
                        <img
                            src={tablet}
                            alt="tablet decoration"
                            className="absolute lg:hidden scale-90 -right-50 sm:-right-3/4 -bottom-27 -z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
