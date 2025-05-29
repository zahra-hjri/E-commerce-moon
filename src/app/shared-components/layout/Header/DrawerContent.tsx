"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface DrawerContentProps {
  items: Item[];
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

const DrawerContent = ({
  items,
  title,
  onClose,
  isOpen,
}: DrawerContentProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-xl z-50 p-6 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={onClose} className="text-xl">
              &times;
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {items.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-4 border p-3 rounded"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                />
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.price}$</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DrawerContent;
