import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion"; // Assure-toi d'importer Framer Motion

const CardDeal = () => (

<section className={layout.section}>
  <div className={layout.sectionInfo}>
    <motion.h2
      className={styles.heading2}
      initial={{ opacity: 0, y: -50 }} // Initialement invisible et déplacé vers le haut
      whileInView={{ opacity: 1, y: 0 }} // Devient visible et revient à la position normale
      transition={{ duration: 0.8 }}
    >
      Find a better card deal <br className="sm:block hidden" /> in few easy
      steps.
    </motion.h2>

    <motion.p
      className={`${styles.paragraph} max-w-[470px] mt-5`}
      initial={{ opacity: 0, y: 20 }} // Initialement invisible et déplacé vers le bas
      whileInView={{ opacity: 1, y: 0 }} // Devient visible et revient à la position normale
      transition={{ duration: 0.8 }}
    >
      Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
      aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Initialement invisible et plus petit
      whileInView={{ opacity: 1, scale: 1 }} // Devient visible et revient à la taille normale
      transition={{ duration: 0.6 }}
    >
      <Button styles={`mt-10`} />
    </motion.div>
  </div>

  <motion.div
    className={layout.sectionImg}
    initial={{ opacity: 0, x: 50 }} // Initialement invisible et décalé vers la droite
    whileInView={{ opacity: 1, x: 0 }} // Devient visible et revient à la position normale
    transition={{ duration: 0.8 }}
  >
    <img src={card} alt="billing" className="w-[100%] h-[100%]" />
  </motion.div>
</section>

);

export default CardDeal;
