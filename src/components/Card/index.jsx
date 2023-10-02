import CardItem from "./cardItem";
import { motion } from "framer-motion";
import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
export default function Card() {
  const bannerContainer = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <div className="container mx-auto max-w-[1344px]">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={bannerContainer}
        viewport={{ once: true }}
        className="text-center space-y-[18px] flex flex-col items-center pt-10"
      >
        <SubHead style="sm:w-4/5 md:w-9/12 lg:w-9/12">Giá gian hàng</SubHead>
      </motion.section>
      <div className="flex flex-col sm:flex-row px-5 py-5 gap-10 sm:px-10 overflow-hidden lg:gap-10">
        <CardItem
          subtitle="Trong nhà, máy lạnh"
          subhead="Trong nhà, máy lạnh."
          paragraph="Build your dream business. Never worry about paying monthly fees or recurring payments again."
          img="/card-1.png"
          primary={true}
        />
        <CardItem
          subtitle="Ngoài trời, không máy lạnh"
          subhead="Ngoài trời, không máy lạnh."
          paragraph="Sell your products online, and turn your social media accounts into marketing channels."
          img="/card-2.png"
          primary={false}
        />
      </div>
    </div>
  );
}
