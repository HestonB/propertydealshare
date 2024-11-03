"use client";

import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "./ui/switch";

export function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPrice = 9.99;
  const yearlyPrice = 100;
  const monthlySavings = (monthlyPrice * 12 - yearlyPrice) / 12;

  const features = [
    "Unlimited access to all property deals",
    "Direct messaging with property sourcers",
    "Real-time deal notifications",
    "Detailed investment metrics (ROI, GDV)",
    "Verified property sourcers",
    "Deal tracking and analytics",
    "Save and compare deals",
    "Priority support",
    "Access to exclusive webinars",
    "Monthly market insights report",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Unlock Premium Property Deals
          </h1>
          <p className="text-xl text-muted-foreground">
            Stop missing out on lucrative property deals. Join our network of
            successful investors and sourcers.
          </p>
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm ${
                !isYearly ? "font-semibold" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span
              className={`text-sm ${
                isYearly ? "font-semibold" : "text-muted-foreground"
              }`}
            >
              Yearly
              <Badge
                variant="secondary"
                className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
              >
                Save £{(monthlySavings * 12).toFixed(2)}
              </Badge>
            </span>
          </div>

          <Card className="p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-orange-400 to-rose-400 text-white">
                <Star className="w-4 h-4 mr-1" /> Most Popular
              </Badge>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Premium Membership</h2>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold">
                  £{isYearly ? yearlyPrice : monthlyPrice}
                </span>
                <span className="text-muted-foreground">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
              {isYearly && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                  Save £{monthlySavings.toFixed(2)} per month
                </p>
              )}
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/signup">
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Join Our Network
              </Button>
            </Link>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Cancel at any time
            </p>
          </Card>

          <div className="mt-8 space-y-4 text-center">
            <h3 className="font-semibold">Why Choose DealFinder Premium?</h3>
            <p className="text-muted-foreground">
              The average property deal on our platform has a potential ROI of
              15-25%. Just one successful deal could cover your subscription
              cost for years.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Badge variant="outline">SSL Secure Payment</Badge>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote:
                "Found my first BRR deal within 2 weeks of joining. The ROI metrics helped me make a confident decision.",
              author: "Sarah Johnson",
              role: "Property Investor",
            },
            {
              quote:
                "As a deal sourcer, I've closed deals 3x faster through DealFinder compared to traditional methods.",
              author: "Michael Chen",
              role: "Property Sourcer",
            },
            {
              quote:
                "The detailed analytics and verified sourcers make this platform invaluable for serious investors.",
              author: "David Thompson",
              role: "Real Estate Professional",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-24 text-center">
          <p className="text-muted-foreground">
            Have questions? Check out our{" "}
            <Link href="/about" className="text-blue-600 hover:underline">
              FAQ section
            </Link>{" "}
            or contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
