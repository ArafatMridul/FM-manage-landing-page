import React from "react";
import Option from "./Option";
import tablet from "/images/bg-tablet-pattern.svg";

const Difference = () => {
    return (
        <section className="relative lg:pb-36 overflow-x-clip">
            <div className="wrapper mt-26 lg:mt-28 lg:grid lg:grid-cols-2">
                <div className="text-center lg:text-start px-6 lg:px-0 sm:px-16 lg:mx-0">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary-b lg:tracking-wide leading-tight">
                        What’s different about Manage?
                    </h2>
                    <p className="text-[0.95rem] text-neutral-g-2/50 mt-5 lg:mt-6 lg:pr-55 leading-[1.75]">
                        Manage provides all the functionality your team needs,
                        without the complexity. Our software is tailor-made for
                        modern digital product teams.
                    </p>
                </div>
                <div className="pl-4 sm:px-16 lg:px-0 mt-14 lg:mt-0 grid gap-8 lg:gap-8">
                    <Option
                        number="01"
                        heading="Track company-wide progress"
                        description="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
                    />
                    <Option
                        number="02"
                        heading="Advanced built-in reports"
                        description="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
                    />
                    <Option
                        number="03"
                        heading="Everything you need in one place"
                        description="Stop jumping from one service to another to communicate, store files track tasks and share documents. Manage offers an all-in-one team productivity solution."
                    />
                </div>
            </div>
            <img src={tablet} alt="tablet illustration" className="hidden lg:block absolute -bottom-115 -left-125 -z-10" />
        </section>
    );
};

export default Difference;
