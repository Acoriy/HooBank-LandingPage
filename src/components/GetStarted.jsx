import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const GetStarted = () => {
  const variants = {
    hidden: { scale: 0.8, rotate: -10, opacity: 0 },
    visible: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (

    <motion.div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group`}
      initial="hidden"
      whileInView="visible"
      variants={variants}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row group`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain group-hover:rotate-45 group-hover:w-[30px] transition-transform duration-300 ease-in-out"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </motion.div>
  );
};

export default GetStarted;
