"use client";
import { motion } from "framer-motion";
import { Button } from "./button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Waitlist</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of the future of property investment. Join our waitlist and
            get your first month for free when we launch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
              >
                Join Our Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignUpButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
