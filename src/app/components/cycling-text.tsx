"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

type CyclingTextProps = {
  phrases: string[]
  interval?: number // ms each phrase is shown
  className?: string
}

export function CyclingText({ phrases, interval = 3000, className = "" }: CyclingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, interval)
    return () => clearInterval(timer)
  }, [phrases.length, interval])

  return (
    <div className={`relative overflow-hidden ${className}`} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {phrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
