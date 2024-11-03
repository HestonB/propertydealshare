"use client";

import {
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
  Search,
  MessageSquare,
  Clock,
  Target,
  CheckCircle2,
  Zap,
  Play,
} from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            className="text-center space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              No More Missed Opportunities
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-600">
              Your Property Investment Network
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop missing deals in WhatsApp groups. Connect directly with
              verified property sourcers and investors in one professional
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignUpButton>
              {/* <Link href="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Sign Up
                </Button>
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose DealFinder?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Replace scattered WhatsApp groups and unreliable networks with a
              professional platform built for serious property investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Find Deals Faster",
                description:
                  "Access a curated marketplace of verified property deals. No more scrolling through endless chat groups.",
              },
              {
                icon: Target,
                title: "Reach The Right Audience",
                description:
                  "Connect with serious investors and trusted sourcers. Quality over quantity.",
              },
              {
                icon: CheckCircle2,
                title: "Verified Opportunities",
                description:
                  "Every deal is vetted and includes comprehensive investment metrics and documentation.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              See It In Action
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Watch How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a quick tour of our platform and discover how easy it is to
              find and list property deals.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/watch?v=Hujg5BOiZb4"
                title="PropertyDealShare Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* <div className="absolute inset-0 flex items-center justify-center bg-blue-600/10">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center"
                >
                  <Play className="h-6 w-6" />
                </Button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="sticky top-24">
                <Badge variant="secondary" className="mb-4">
                  For Property Sourcers
                </Badge>
                <h2 className="text-3xl font-bold mb-6">
                  Get Your Deals In Front Of Serious Investors
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: Building2,
                      title: "List Your Property",
                      description:
                        "Upload comprehensive deal information including ROI, GDV, and refurb costs.",
                    },
                    {
                      icon: Users,
                      title: "Reach Investors",
                      description:
                        "Your deal is instantly visible to our network of verified investors.",
                    },
                    {
                      icon: MessageSquare,
                      title: "Direct Communication",
                      description:
                        "Connect directly with interested investors through our platform.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Track Performance",
                      description:
                        "Monitor views, inquiries, and engagement with your listings.",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <Badge variant="secondary" className="mb-4">
                  For Investors
                </Badge>
                <h2 className="text-3xl font-bold mb-6">
                  Never Miss Another Great Deal
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: Zap,
                      title: "Instant Access",
                      description:
                        "Get notified immediately when new deals matching your criteria are listed.",
                    },
                    {
                      icon: Search,
                      title: "Detailed Analysis",
                      description:
                        "View comprehensive deal metrics, including ROI calculations and potential returns.",
                    },
                    {
                      icon: Clock,
                      title: "Save Time",
                      description:
                        "All deals in one place - no more jumping between WhatsApp groups and emails.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Verified Sourcers",
                      description:
                        "Deal with trusted property sourcers with verified track records.",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Property Investment Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our growing network of property professionals and take your
              investment strategy to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignUpButton>
              {/* <Link href="/deals">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Browse Available Deals
                </Button>
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
