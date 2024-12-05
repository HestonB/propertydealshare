"use client";

import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Bell, Calendar, Mail, Star } from "lucide-react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

export default function WaitlistPage() {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 py-24">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                Welcome to the Waitlist
              </Badge>
              <h1 className="text-4xl font-bold mb-6">
                {user?.firstName}, you're in! 🎉
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Thank you for joining the Property Deal Share waitlist. You're
                now part of an exclusive group who will be first to access our
                platform.
              </p>

              <Card className="p-8 mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        <Star className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Early Access</h3>
                        <p className="text-sm text-muted-foreground">
                          You'll be among the first to access our platform when
                          we launch
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Free Trial</h3>
                        <p className="text-sm text-muted-foreground">
                          Enjoy your first month completely free as a thank you
                          for joining early
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Launch Updates</h3>
                        <p className="text-sm text-muted-foreground">
                          We'll keep you updated on our progress and notify you
                          when we're ready to launch
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">
                          Exclusive Content
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Get early access to educational content and investment
                          insights
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Expected launch: Q4 2024. We'll notify you via email when
                  we're ready.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
