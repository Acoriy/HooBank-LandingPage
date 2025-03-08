import { quotes } from "../assets";
import { motion } from "framer-motion";





const FeedbackCard = ({ content, name, title, img }) => {
  return (

    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <motion.img
        src={quotes}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
      />
      <motion.p
        className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        {content}
      </motion.p>
    
      <motion.div
        className="flex flex-row"
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={img}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
        />
        <div className="flex flex-col ml-4">
          <motion.h4
            className="font-poppins font-semibold text-[20px] leading-[32px] text-white"
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            {name}
          </motion.h4>
          <motion.p
            className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.p>
        </div>
      </motion.div>
    </div>
    
  )
}

export default FeedbackCard

