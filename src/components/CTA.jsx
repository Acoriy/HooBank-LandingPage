import styles from "../style";
import Button from "./Button";
import { motion } from "framer-motion"; // N'oublie pas d'importer Framer Motion

const CTA = () => (

<section
  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
>
  <div className="flex-1 flex flex-col">
    <motion.h2
      className={styles.heading2}
      initial={{ opacity: 0, y: -50 }} // Initialement invisible et déplacé vers le haut
      whileInView={{ opacity: 1, y: 0 }} // Devient visible et revient à sa position normale
      transition={{ duration: 0.8 }}
    >
      Let’s try our service now!
    </motion.h2>

    <motion.p
      className={`${styles.paragraph} max-w-[470px] mt-5`}
      initial={{ opacity: 0, y: 20 }} // Initialement invisible et déplacé vers le bas
      whileInView={{ opacity: 1, y: 0 }} // Devient visible et revient à sa position normale
      transition={{ duration: 0.8 }}
    >
      Everything you need to accept card payments and grow your business anywhere on the planet.
    </motion.p>
  </div>

  <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Initialement invisible et plus petit
      whileInView={{ opacity: 1, scale: 1 }} // Devient visible et revient à la taille normale
      transition={{ duration: 0.6 }}
    >
      <Button />
    </motion.div>
  </div>
</section>

);

export default CTA;
