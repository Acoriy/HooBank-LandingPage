import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion"; 

const FeatureCard = ({ icon, title, content, index }) => (


  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  >
    <motion.div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} 
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </motion.div>
  
    <div className="flex-1 flex flex-col ml-3">
      <motion.h4
        className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
      >
        {title}
      </motion.h4>
  
      <motion.p
        className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
      >
        {content}
      </motion.p>
    </div>
  </div>
  

);

const Business = () =>  (


<section id="features" className={layout.section}>
  <div className={layout.sectionInfo}>
    <motion.h2
      className={styles.heading2}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      You do the business, <br className="sm:block hidden" /> we’ll handle
      the money.
    </motion.h2>

    <motion.p
      className={`${styles.paragraph} max-w-[470px] mt-5`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      With the right credit card, you can improve your financial life by
      building credit, earning rewards and saving money. But with hundreds
      of credit cards on the market.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Button styles={`mt-10`} />
    </motion.div>
  </div>

  <div className={`${layout.sectionImg} flex-col`}>
    {features.map((feature, index) => (
      <motion.div
        key={feature.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <FeatureCard {...feature} index={index} />
      </motion.div>
    ))}
  </div>
</section>

);

export default Business;
