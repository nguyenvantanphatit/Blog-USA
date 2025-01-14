import React from 'react';
import { motion } from 'framer-motion';

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold text-gray-800">Product Description</h3>
      <p className="text-sm text-gray-500 mt-4">{description}</p>
      <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-500">
        <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
        <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
        <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
        <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
      </ul>
    </motion.div>
  );
};

export default ProductDescription;

