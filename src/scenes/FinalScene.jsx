import { motion } from 'framer-motion'

// Фінальна сцена: велике серце з ім'ям і безліч сердечок, що піднімаються
export default function FinalScene() {
  return (
    <svg viewBox="0 0 340 340" width="100%" height="100%" aria-hidden>
      {/* пульсуючі кільця */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="170" cy="170" r="60"
          fill="none" stroke="#f0a9b6" strokeWidth="2"
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: i }}
          style={{ transformOrigin: '170px 170px' }}
        />
      ))}

      {/* велике серце */}
      <motion.path
        d="M170 252 C 100 200 64 162 64 118 C 64 84 90 60 124 60 C 148 60 164 76 170 92 C 176 76 192 60 216 60 C 250 60 276 84 276 118 C 276 162 240 200 170 252 Z"
        fill="#e07a92"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '170px 150px' }}
      />
      <ellipse cx="128" cy="100" rx="18" ry="11" fill="#fff" opacity="0.35" transform="rotate(-30 128 100)" />

      {/* ім'я */}
      <text x="170" y="158" textAnchor="middle" fontSize="34" fill="#fff" fontFamily="'Marck Script', cursive">
        Анюта
      </text>

      {/* сердечка, що піднімаються звідусіль */}
      {[...Array(9)].map((_, i) => (
        <motion.text
          key={i}
          x={40 + i * 32} y={330}
          fontSize={14 + (i % 3) * 6}
          initial={{ opacity: 0, y: 330 }}
          animate={{ opacity: [0, 1, 0], y: -10 }}
          transition={{ delay: i * 0.35, duration: 4, repeat: Infinity }}
        >
          {i % 2 ? '💗' : '❤️'}
        </motion.text>
      ))}
    </svg>
  )
}
