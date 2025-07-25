import React, { useState } from "react";
import Button from "./Button";

import anisha from "/images/avatar-anisha.png";
import ali from "/images/avatar-ali.png";
import richard from "/images/avatar-richard.png";
import shanai from "/images/avatar-shanai.png";

const clients = [
    {
        name: "Anisha Li",
        image: anisha,
        description:
            "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
        name: "Ali Bravo",
        image: ali,
        description:
            "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
        name: "Richard Watts",
        image: richard,
        description:
            "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
        name: "Shanai Gough",
        image: shanai,
        description:
            "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
];

const Testimonial = () => {
    const [value, setValue] = useState(0);
    const selectedClient = clients[value];
    return (
        <section className="pt-12 pb-12 lg:pb-45">
            <div className="px-6 lg:px-0 sm:w-[528px] sm:mx-auto lg:w-auto lg:mx-0">
                <div className="text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary-b lg:tracking-wide leading-tight">
                        What they’ve said
                    </h3>
                </div>
                <div className="lg:hidden mt-24">
                    <div className="relative text-center bg-neutral-g-1 rounded-sm px-4 pt-16 pb-10">
                        <img
                            src={selectedClient.image}
                            alt={`${selectedClient.name}`}
                            className="w-18 absolute -top-9 left-1/2 -translate-x-1/2"
                        />
                        <h4 className="">{selectedClient.name}</h4>
                        <p className="text-[0.9rem] text-neutral-g-2/50 mt-5 lg:mt-6 leading-[1.75]">
                            {selectedClient.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-8">
                        {clients.map((clients, index) => (
                            <div
                                onClick={() => setValue(index)}
                                key={index}
                                className={`size-2 rounded-full border border-primary-o cursor-pointer ${
                                    value === index && "bg-primary-o"
                                } transition-all duration-300 `}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block mt-6 relative z-10">
                    <div className="overflow-x-auto scrollbar-hide pb-2">
                        <div className="flex w-max items-start gap-8 pt-20">
                            {clients.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative text-center"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-18 absolute -top-9 left-1/2 -translate-x-1/2 z-50"
                                    />
                                    <div className="bg-neutral-g-1 rounded-sm pt-16 px-6 pb-10 max-w-[532px]">
                                        <h4>{item.name}</h4>
                                        <p className="text-[0.9rem] lg:text-[1rem] text-neutral-g-2/50 mt-5 leading-[1.75] lg:leading-[1.5]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-10">
                    <Button className="shadow-primary-o bg-primary-o text-neutral-o">
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
