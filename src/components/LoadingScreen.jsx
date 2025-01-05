// src/components/LoadingScreen.jsx
import  { useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 20, opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img src={logo} alt="Logo" className="loading-logo" />
      </motion.div>
    </AnimatePresence>
  );
};

LoadingScreen.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default LoadingScreen;
