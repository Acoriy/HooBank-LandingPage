import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Billing = () => (

<section id="product" className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
    <motion.img
      src={bill}
      alt="billing"
      className="w-[100%] h-[100%] relative z-[5]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    />

    {/* gradient start */}
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    {/* gradient end */}
  </div>

  <div className={layout.sectionInfo}>
    <motion.h2
      className={styles.heading2}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Easily control your <br className="sm:block hidden" /> billing & invoicing
    </motion.h2>

    <motion.p
      className={`${styles.paragraph} max-w-[470px] mt-5`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
      aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
      placerat.
    </motion.p>

    <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <motion.img
        src={apple}
        alt="google_play"
        className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={google}
        alt="google_play"
        className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  </div>
</section>

);

export default Billing;
