"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex gap-10">
        <motion.div
          className="h-6 w-6 rounded-full bg-primary"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "0%", "50%", "50%"],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
        <motion.div
          className="h-6 w-6 rounded-full bg-primary"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "0%", "50%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
        <motion.div
          className="h-6 w-6 rounded-full bg-primary"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "0%", "50%", "50%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div>
    </div>
  );
}
