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
} from "lucide-react";
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
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
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
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
              Your Property Investment Network
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop missing deals in WhatsApp groups. Connect directly with
              verified property sourcers and investors in one professional
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/deals">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Deals <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/deals/create">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  List Your Deal
                </Button>
              </Link>
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
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
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

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
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
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-6 w-6 text-primary" />
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

            <div>
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
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-6 w-6 text-primary" />
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
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/deals">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Browse Available Deals
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}