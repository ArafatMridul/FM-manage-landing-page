import React from "react";

const Option = ({ number, heading, description }) => {
    return (
        <div>
            <div>
                <div className="flex items-center bg-neutral-o lg:bg-white rounded-l-full">
                    <span className="bg-primary-o text-md text-neutral-g-1 px-6 py-[10px] rounded-full mr-4 lg:mr-6">
                        {number}
                    </span>
                    <h3 className="text-[0.95rem] font-bold text-primary-b leading-tight py-2">
                        {heading}
                    </h3>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-[90px_1fr]">
                <p className="lg:col-start-2 text-[0.87rem] lg:text-[0.9rem] text-start text-neutral-g-2/50 mt-5 lg:mt-1 leading-[2] lg:leading-[1.8] lg:pr-12">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Option;
