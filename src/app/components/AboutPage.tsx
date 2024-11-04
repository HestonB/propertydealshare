"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MessageSquare,
  Users,
  Target,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";
import CallToAction from "./ui/callToAction";

export function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };

  const stats = [
    { value: "£50M+", label: "In Property Deals" },
    { value: "1,000+", label: "Active Investors" },
    { value: "300+", label: "Verified Sourcers" },
    { value: "15-25%", label: "Average ROI" },
  ];

  const faqs = [
    {
      question: "When do you plan to launch the platform?",
      answer:
        "We are currently mid way through our development of this platform and plan to launch by the end of 2024. Join our waitlist to be the first in line when we do and get your first month free!",
    },
    {
      question: "What types of deals can I find on the platform?",
      answer:
        "Our platform features a wide range of property deals including Buy, Refurbish, Refinance (BRR), Rent to Rent, and various other investment opportunities. Each deal comes with detailed metrics and investment potential.",
    },
    {
      question: "How is this different from property groups on WhatsApp?",
      answer:
        "Unlike informal WhatsApp groups, we provide a structured, professional platform, detailed analytics, and direct communication channels. All deals are properly documented and include comprehensive investment metrics.",
    },
    {
      question: "Can I list my own property deals?",
      answer:
        "Yes! Once you're a member, you can list your property deals on our platform. Each listing includes detailed sections for property information, investment metrics, and high-quality images.",
    },
    {
      question: "What happens after I find a deal I'm interested in?",
      answer:
        "You can directly contact the property sourcer, review all documentation, and proceed with your due diligence. We provide communication methods and deal tracking features to help manage the process.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <Badge variant="secondary" className="mb-4">
              Our Story
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Building the Future of Property Investment
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From frustrated investors to community builders, we're
              transforming how property deals are discovered and shared.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInFromLeft}
            >
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Like many property investors, we started our journey in
                  countless WhatsApp groups, trying to piece together deals from
                  scattered messages and incomplete information.
                </p>
                <p>
                  The frustration was real - missed opportunities, unreliable
                  sources, and hours wasted scrolling through chat groups. We
                  knew there had to be a better way.
                </p>
                <p>
                  That's when Property Deal Share was born. We set out to create
                  what we wished existed: a professional platform where serious
                  investors could connect with verified sourcers, access
                  detailed deal information, and make confident investment
                  decisions.
                </p>
              </div>
            </motion.div>
            {/* 
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              To create the most transparent and efficient property investment
              community, where every member has equal access to quality deals
              and opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Transparency",
                description:
                  "Every deal includes all the information and comprehensive metrics for informed decision-making.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "A network of serious investors and sourcers, working together to create mutual success.",
              },
              {
                icon: MessageSquare,
                title: "Communication",
                description:
                  "Direct, efficient communication channels between investors and sourcers.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
              <p className="text-muted-foreground">
                Everything you need to know about Property Deal Share and how it
                works.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
}
