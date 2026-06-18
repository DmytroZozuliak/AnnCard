import { useMemo } from 'react'
import { motion } from 'framer-motion'

// Святкове конфеті — спалах при досягненні фінального екрана.
const COLORS = ['#e89aa6', '#d36f86', '#ffd27d', '#e3b778', '#8fbd74', '#f0a9b6', '#fff']

export default function Confetti({ count = 70 }) {
  // позиції фіксуємо один раз на маунт
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 7 + Math.random() * 9,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: Math.random() * 0.6,
        duration: 2.4 + Math.random() * 1.8,
        drift: (Math.random() - 0.5) * 160,
        rotate: Math.random() * 720 - 360,
        round: Math.random() > 0.5,
      })),
    [count]
  )

  return (
    <div className="float-layer" aria-hidden>
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: '-12vh', x: 0, opacity: 1, rotate: 0 }}
          animate={{ y: '112vh', x: p.drift, opacity: [1, 1, 0.9, 0], rotate: p.rotate }}
          transition={{ delay: p.delay, duration: p.duration, ease: 'easeIn', repeat: Infinity, repeatDelay: 1.2 }}
          style={{
            position: 'absolute',
            top: 0,
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.6,
            background: p.color,
            borderRadius: p.round ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  )
}
