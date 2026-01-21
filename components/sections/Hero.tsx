'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'

export default function Hero() {
  const [running, setRunning] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    )
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleClick = () => {
    if (prefersReducedMotion || running) return
    setRunning(true)

    const end = Date.now() + 2500

    ;(function frame() {
      confetti({
        particleCount: 20,
        angle: 60 + Math.random() * 60,
        spread: 55,
        origin: { x: Math.random() * 0.6 + 0.2, y: Math.random() * 0.2 + 0.05 },
        colors: ['#ff6b6b', '#ffd166', '#06d6a0', '#4d96ff', '#b197fc'],
      })
      if (Date.now() < end) {
        timeoutRef.current = window.setTimeout(frame, 250)
      } else {
        setRunning(false)
      }
    })()
  }

  return (
    <section
      id="hero"
      className="py-16 md:py-28 flex flex-col items-center text-center"
    >
      <div className="max-w-3xl px-4">
        <button
          onClick={handleClick}
          aria-label="Profile photo (click for celebration)"
          className="rounded-full ring-2 ring-offset-2 ring-indigo-400 dark:ring-indigo-500 inline-block focus:outline-none focus-visible:ring-4 transition-transform hover:scale-105 overflow-hidden rotate-90"
          title="Click for fireworks"
        >
          <Image
            src="/anish.png"
            alt="Atharv Amey Dhore — profile photo"
            width={200}
            height={200}
            priority
            className="rounded-full object-cover"
          />
        </button>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Atharv Amey Dhore
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Computer Science Student · Robotics · Cybersecurity · Competitive Programming
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/AnishD4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

