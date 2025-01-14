"use client"
import { AnimatePresence } from "framer-motion";
import React from "react";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";
export type Data = {
    img: string;
    title: string;
    description: string;
    location: string;
};

export type CurrentSlideData = {
    data: Data;
    index: number;
};

export default function NavBar() {
    const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
    const [transitionData, setTransitionData] = React.useState<Data>(
        sliderData[0]
    );
    const [currentSlideData, setCurrentSlideData] =
        React.useState<CurrentSlideData>({
            data: initData,
            index: 0,
        });

    return (
        <main
            className={`
        relative md:min-h-[66vh] min-h-[80vh] select-none overflow-hidden text-white antialiased bg-black`}
        >
            <AnimatePresence>
                <div className="absolute z-20 h-full w-full">
                    <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
                        <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                            <SlideInfo
                                transitionData={transitionData}
                                currentSlideData={currentSlideData}
                            />
                        </div>
                        <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
                            <Slides data={data} />
                            <Controls
                                currentSlideData={currentSlideData}
                                data={data}
                                transitionData={transitionData}
                                initData={initData}
                                handleData={setData}
                                handleTransitionData={setTransitionData}
                                handleCurrentSlideData={setCurrentSlideData}
                                sliderData={sliderData}
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </main>
    );
}

const sliderData = [
    {
        img: "/Gift/1.webp",
        location: "Xuân Lộc Phát Tài 01",
        description:
            "",
        title: "Xuân Lộc Phát Tài 01",
    },
    {
        img: "/Gift/2.webp",
        location: "Xuân Lộc Phát Tài 02",
        description:
            "",
        title: "Xuân Lộc Phát Tài 02",
    },
    {
        img: "/Gift/3.webp",
        location: "Xuân Lộc Phát Tài 03",
        description:
            "",
        title: "Xuân Lộc Phát Tài 03",
    },
    {
        img: "/Gift/4.webp",
        location: "Xuân Lộc Phát Tài 04",
        description:
            "",
        title: "Xuân Lộc Phát Tài 04",
    },
    {
        img: "/Gift/5.webp",
        location: "Xuân Lộc Phát Tài 05",
        description:
            "",
        title: "Xuân Lộc Phát Tài 05",
    },
];

const initData = sliderData[0];
