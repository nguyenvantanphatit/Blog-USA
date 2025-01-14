import React from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

type OtherInfoProps = {
  data: {
    title: string;
  };
};

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  return (
    <span style={{ overflow: "hidden", display: "inline-block" }}>
      <motion.p className={className} variants={item}>
        {text}
      </motion.p>
    </span>
  );
};

const OtherInfo: React.FC<OtherInfoProps> = ({ data }) => {
  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-col">
      <AnimatedText
        className="my-1 text-2xl font-semibold md:text-4xl md:leading-[100px]"
        text="Chào Đón Tết Nguyên Đán 2025"
      />
      <AnimatedText
        className="text-xs text-[#D5D5D6]"
        text="Khám phá bộ sưu tập quà tặng và đồ trang trí độc đáo cho năm mới"
      />
    </motion.div>
  );
};

export default OtherInfo;

