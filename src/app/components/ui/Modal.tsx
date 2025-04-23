import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-100 rounded-xl shadow-lg p-6 w-full h-full max-w-[50%] max-h-[60%] relative"
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-xl"
          >
            &times;
          </button>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
