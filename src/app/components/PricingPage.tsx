"use client";

import { ArrowRight, Building2, Check, Star, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "./ui/switch";
import { SignUpButton } from "@clerk/nextjs";

export function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPrice = 9.99;
  const yearlyPrice = 100;
  const monthlySavings = (monthlyPrice * 12 - yearlyPrice) / 12;

  const features = {
    investor: [
      "Access to all property deals",
      "Direct messaging with sourcers",
      "Deal comparison tools",
      "Investment metrics calculator",
      "Save favorite properties",
      "Deal alerts for your criteria",
    ],
    sourcer: [
      "List unlimited property deals",
      "Reach investors directly",
      "Deal analytics dashboard",
      "Professional listing tools",
      "Investor interest tracking",
      "Featured deal promotion",
    ],
  };

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
            One Account, Double the Value
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Access Everything With One Account
          </h1>
          <p className="text-xl text-muted-foreground">
            Whether you're an investor or a sourcer, get all the tools you need
            with a single subscription.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
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
                <Star className="w-4 h-4 mr-1" /> All-In-One Account
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

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  Investor Features
                </h3>
                <div className="space-y-4">
                  {features.investor.map((feature, index) => (
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
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Sourcer Features
                </h3>
                <div className="space-y-4">
                  {features.sourcer.map((feature, index) => (
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
              </div>
            </div>

            <SignUpButton>
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Join Our Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignUpButton>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Cancel at any time • No hidden fees
            </p>
          </Card>

          <div className="mt-8 space-y-4 text-center">
            <h3 className="font-semibold">Why Choose Property Deal Search?</h3>
            <p className="text-muted-foreground">
              Most deals posted on our website have an ROI of between 12-25%.
              Just one deal could cover your membership for years to come.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Badge variant="outline">SSL Secure Payment</Badge>
              <Badge variant="outline">Instant Access</Badge>
            </div>
          </div>
        </motion.div>

        {/* Testimonials
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote:
                "I started as an investor but now also source deals. Having both capabilities in one account is invaluable.",
              author: "Sarah Johnson",
              role: "Property Investor & Sourcer",
            },
            {
              quote:
                "The platform makes it easy to switch between sourcing and investing. It's transformed my property business.",
              author: "Jonathan Aitken",
              role: "Property Professional",
            },
            {
              quote:
                "Being able to both list and search for deals with one account has doubled my deal flow.",
              author: "David Thompson",
              role: "Real Estate Entrepreneur",
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
        </div> */}

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
