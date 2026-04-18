"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollPath() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // A more complex, mechanical path with hard angles and subtle curves
  const mainPath = "M 5 0 V 100 H 95 V 300 H 5 V 500 H 95 V 700 H 5 V 900 H 50 V 1000";
  
  // Secondary "data line" that follows slightly differently
  const secondaryPath = "M 10 0 V 110 H 90 V 310 H 10 V 510 H 90 V 710 H 10 V 910 H 50 V 1000";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Background Guide Line */}
        <path
          d={mainPath}
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.2"
        />
        
        {/* Animated Main Conduit */}
        <motion.path
          d={mainPath}
          fill="none"
          stroke="#ff4d00"
          strokeWidth="0.5"
          style={{ pathLength }}
        />

        {/* Animated Secondary Conduit */}
        <motion.path
          d={secondaryPath}
          fill="none"
          stroke="#f5f5f7"
          strokeWidth="0.2"
          opacity="0.3"
          style={{ pathLength }}
        />

        {/* Accent Nodes (Circles at corners) */}
        {[100, 300, 500, 700, 900].map((y) => (
          <motion.circle
            key={y}
            cx={y % 200 === 100 ? 95 : 5}
            cy={y}
            r="1"
            fill="#ff4d00"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        ))}
        
        {/* Moving Tip Indicator */}
        <motion.circle
          cx={40} // This is just a placeholder, path tracing is complex in SVG
          cy={10} // We can use useTransform to find the point, but for now let's keep it simple
          r="2"
          fill="#ff4d00"
          style={{
             display: "none" // Hide for now as simple SVG circles don't follow pathLength easily without complex math
          }}
        />
      </svg>
    </div>
  );
}
