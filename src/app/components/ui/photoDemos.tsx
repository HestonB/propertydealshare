"use-client";

import { Badge } from "lucide-react";
import { motion } from "framer-motion";

const PhotoDemos = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Watch How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a quick tour of our platform and discover how easy it is to
            find and list property deals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoDemos;
