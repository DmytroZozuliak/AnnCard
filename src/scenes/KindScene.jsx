import { motion } from 'framer-motion'

// Анімація: тепле серце, що пульсує і випромінює промені доброти
const RAYS = [...Array(12)].map((_, i) => i * 30)

export default function KindScene() {
  return (
    <svg viewBox="0 0 340 340" width="100%" height="100%" aria-hidden>
      {/* промені доброти */}
      {RAYS.map((deg, i) => (
        <motion.line
          key={deg}
          x1="170" y1="170" x2="170" y2="40"
          stroke="#ffd27d"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${deg} 170 170)`}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0.6], opacity: [0, 0.9, 0.5] }}
          transition={{ delay: 0.3 + i * 0.05, duration: 2.2, repeat: Infinity, repeatType: 'reverse' }}
        />
      ))}

      {/* м'яке сяйво */}
      <motion.circle
        cx="170" cy="170" r="95" fill="#ffe9c2"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* серце */}
      <motion.path
        d="M170 232 C 120 196 96 168 96 138 C 96 114 116 98 138 98 C 154 98 166 108 170 120 C 174 108 186 98 202 98 C 224 98 244 114 244 138 C 244 168 220 196 170 232 Z"
        fill="#e07a92"
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '170px 165px' }}
      />
      {/* відблиск на серці */}
      <ellipse cx="146" cy="132" rx="14" ry="9" fill="#fff" opacity="0.4" transform="rotate(-30 146 132)" />

      {/* маленькі сердечка, що піднімаються */}
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i}
          d="M0 6 C -6 0 -6 -6 0 -3 C 6 -6 6 0 0 6 Z"
          fill="#f0a9b6"
          initial={{ x: 110 + i * 30, y: 180, opacity: 0, scale: 0.8 }}
          animate={{ y: 60, opacity: [0, 1, 0], scale: 1.4 }}
          transition={{ delay: 1 + i * 0.4, duration: 2.6, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
    </svg>
  )
}
