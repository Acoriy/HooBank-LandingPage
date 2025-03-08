import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import {motion} from "framer-motion";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
  {/* Animation du logo et de la description */}
  <motion.div
    initial={{ opacity: 0, y: 20 }} // Démarre invisible et un peu plus bas
    whileInView={{ opacity: 1, y: 0 }} // Deviens visible et revient à sa position initiale
    transition={{ duration: 1, delay: 0.3 }} // Animation avec une petite pause avant le début
    className="flex-[1] flex flex-col justify-start mr-10"
  >
    <img
      src={logo}
      alt="hoobank"
      className="w-[266px] h-[72.14px] object-contain"
    />
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }} // Décalage pour que le texte apparaisse après l'image
      className={`${styles.paragraph} mt-4 max-w-[312px]`}
    >
      A new way to make the payments easy, reliable and secure.
    </motion.p>
  </motion.div>

  {/* Animation des liens du footer */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }} // Animation avec un léger retard
    className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10"
  >
    {footerLinks.map((footerlink) => (
      <motion.div
        key={footerlink.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }} // Animation après un certain délai
        className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
      >
        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
          {footerlink.title}
        </h4>
        <ul className="list-none mt-4">
          {footerlink.links.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 + index * 0.2 }} // Délai progressif pour chaque élément
              className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
              }`}
            >
              {link.name}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    ))}
  </motion.div>
</div>

    <motion.div 
     initial={{ opcaity:0 , y:100 }}
     whileInView={{ y:0 , opcaity:1 }}
     transition={{ duration:0.8 }}
     className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2025 HooBank. All Rights Reserved | Developed by <a href="https://sofyaneacoriy.netlify.app/" target="_blank" className="hover:text-secondary transition-transform duration-300 ease-in-out hover:underline">Sofyane Acoriy</a>.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer hover:text-secondary ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Footer;
