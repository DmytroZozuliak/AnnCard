import { motion } from 'framer-motion'

// Анімація: квіти, що розпускаються один за одним
const FLOWERS = [
  { x: 60, y: 235, scale: 1.05, color: '#e89aa6', core: '#e3b778', delay: 0.1 },
  { x: 170, y: 210, scale: 1.35, color: '#d36f86', core: '#ffd27d', delay: 0.35 },
  { x: 280, y: 240, scale: 1.0, color: '#f0a9b6', core: '#e3b778', delay: 0.6 },
  { x: 115, y: 285, scale: 0.85, color: '#e89aa6', core: '#ffd27d', delay: 0.85 },
  { x: 230, y: 290, scale: 0.9, color: '#d36f86', core: '#e3b778', delay: 1.05 },
]

const PETALS = [0, 60, 120, 180, 240, 300]

function Flower({ x, y, scale, color, core, delay }) {
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale, opacity: 1 }}
      transition={{ delay, type: 'spring', stiffness: 120, damping: 9 }}
      style={{ transformOrigin: `${x}px ${y + 30}px` }}
    >
      {/* стебло */}
      <motion.path
        d={`M ${x} ${y + 28} Q ${x - 6} ${y + 80} ${x} ${y + 120}`}
        stroke="#7faa6a"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: delay + 0.1, duration: 0.5 }}
      />
      {/* листок */}
      <ellipse cx={x + 12} cy={y + 78} rx="13" ry="7" fill="#8fbd74" transform={`rotate(35 ${x + 12} ${y + 78})`} />
      {/* пелюстки */}
      {PETALS.map((deg) => (
        <ellipse
          key={deg}
          cx={x}
          cy={y - 18}
          rx="11"
          ry="20"
          fill={color}
          transform={`rotate(${deg} ${x} ${y})`}
        />
      ))}
      {/* серцевина */}
      <circle cx={x} cy={y} r="11" fill={core} />
    </motion.g>
  )
}

export default function BeautyScene() {
  return (
    <svg viewBox="0 0 340 380" width="100%" height="100%" aria-hidden>
      {/* сонячне сяйво */}
      <motion.circle
        cx="170" cy="120" r="70" fill="#ffe9c2"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1 }}
      />
      {FLOWERS.map((f, i) => (
        <Flower key={i} {...f} />
      ))}
      {/* пелюстки, що падають */}
      {[...Array(6)].map((_, i) => (
        <motion.path
          key={i}
          d="M0 0 q 6 -10 12 0 q -6 10 -12 0 Z"
          fill="#f0a9b6"
          initial={{ x: 40 + i * 48, y: -20, opacity: 0, rotate: 0 }}
          animate={{ y: 380, opacity: [0, 1, 1, 0], rotate: 360 }}
          transition={{ delay: 1.3 + i * 0.3, duration: 4, repeat: Infinity, repeatDelay: i * 0.6 }}
        />
      ))}
    </svg>
  )
}
