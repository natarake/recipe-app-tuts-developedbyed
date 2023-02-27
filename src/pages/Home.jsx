import React from "react";
import GlutenFree from "../components/GlutenFree";
import Lowcarb from "../components/Lowcarb";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veggie />
      <Lowcarb />
      <GlutenFree />
    </motion.div>
  );
};

export default Home;
