import { clients } from "../constants";
import styles from "../style";
import {motion} from "framer-motion"


const Clients = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
<motion.section
  className={`${styles.flexCenter} my-4`}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
  <motion.div
    className={`${styles.flexCenter} flex-wrap w-full`}
    variants={containerVariants}
  >
    {clients.map((client) => (
      <motion.div
        key={client.id}
        className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        variants={itemVariants}
      >
        <img
          src={client.logo}
          alt="client_logo"
          className="sm:w-[192px] w-[100px] object-contain"
        />
      </motion.div>
    ))}
  </motion.div>
</motion.section>

  )
}

export default Clients

