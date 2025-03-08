import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";
const Stats = () => (

<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
  {stats.map((stat) => (
    <motion.div 
      key={stat.id} 
      className={`flex-1 flex justify-start items-center flex-row m-3`}
      initial={{ opacity: 0, x: -100 }}  // État initial (invisible et décalé à gauche)
      whileInView={{ opacity: 1, x: 0 }}  // Devient visible et se déplace en position
      transition={{ duration: 0.8 }}  // Durée de l'animation
    >
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
        {stat.value}
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
        {stat.title}
      </p>
    </motion.div>
  ))}
</section>

);

export default Stats;
