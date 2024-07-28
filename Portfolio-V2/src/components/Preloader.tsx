import { motion } from "framer-motion";
import "./Preloader.scss";

function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial="opacity: 0.5"
      animate="opacity: 1"
      exit="opacity: 0"
    ></motion.div>
  );
}

export default Preloader;
