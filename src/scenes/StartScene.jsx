import { motion } from 'framer-motion'

// Стартова сцена: подарунок із серцем і букетом, що ніжно гойдається
export default function StartScene() {
  return (
    <svg viewBox="0 0 340 340" width="100%" height="100%" aria-hidden>
      {/* німб-сяйво */}
      <motion.circle
        cx="170" cy="180" r="105" fill="#ffe9c2"
        animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* коробка подарунка */}
      <motion.g
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '170px 230px' }}
      >
        <rect x="100" y="180" width="140" height="110" rx="10" fill="#e89aa6" />
        <rect x="100" y="180" width="140" height="34" rx="8" fill="#d36f86" />
        <rect x="158" y="180" width="24" height="110" fill="#ffd27d" />
        {/* бант */}
        <path d="M170 180 C 150 150 120 160 132 180 Z" fill="#ffd27d" />
        <path d="M170 180 C 190 150 220 160 208 180 Z" fill="#ffd27d" />
        <circle cx="170" cy="180" r="10" fill="#e3b778" />
      </motion.g>

      {/* сердечка вилітають */}
      {[...Array(6)].map((_, i) => (
        <motion.text
          key={i}
          x={130 + i * 18} y={170}
          fontSize="20"
          initial={{ opacity: 0, y: 175 }}
          animate={{ opacity: [0, 1, 0], y: 70 }}
          transition={{ delay: i * 0.5, duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
        >
          {i % 2 ? '💗' : '🌸'}
        </motion.text>
      ))}
    </svg>
  )
}
