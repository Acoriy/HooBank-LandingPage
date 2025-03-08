import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import {motion} from "framer-motion"

const Testimonials = () => {

  return (
  //   <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
  //   <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

  //   <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
  //     <h2 className={styles.heading2}>
  //       What People are <br className="sm:block hidden" /> saying about us
  //     </h2>
  //     <div className="w-full md:mt-0 mt-6">
  //       <p className={`${styles.paragraph} text-left max-w-[450px]`}>
  //         Everything you need to accept card payments and grow your business
  //         anywhere on the planet.
  //       </p>
  //     </div>
  //   </div>

  //   <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
  //     {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
  //   </div>
  // </section>
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
  <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

  <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
    <motion.h2 
      className={styles.heading2}
      whileInView={{ opacity: 1, y: 0 }} // Animation d'entrée (par exemple, glissement vertical)
      initial={{ opacity: 0, y: 50 }} // État initial avant de voir l'élément
      transition={{ duration: 1 }}
    >
      What People are <br className="sm:block hidden" /> saying about us
    </motion.h2>

    <div className="w-full md:mt-0 mt-6">
      <motion.p 
        className={`${styles.paragraph} text-left max-w-[450px]`}
        whileInView={{ opacity: 1, x: 0 }} // Effet de glissement horizontal pour le texte
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </motion.p>
    </div>
  </div>

  <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
    {feedback.map((card) => (
      <motion.div 
        key={card.id} 
        whileInView={{ opacity: 1, scale: 1 }} // Animation d'entrée pour chaque carte
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <FeedbackCard {...card} />
      </motion.div>
    ))}
  </div>
</section>
  )
}

export default Testimonials
