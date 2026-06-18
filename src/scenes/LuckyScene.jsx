import { motion } from 'framer-motion'

// Анімація: яке щастя бути поруч — чотирилиста конюшина, зорепад і блиск
function Leaf({ rotate }) {
  return (
    <path
      d="M0 0 C -22 -10 -22 -40 0 -40 C 22 -40 22 -10 0 0 Z"
      fill="#7fbf6a"
      transform={`rotate(${rotate})`}
    />
  )
}

export default function LuckyScene() {
  return (
    <svg viewBox="0 0 340 340" width="100%" height="100%" aria-hidden>
      {/* сяйво */}
      <motion.circle
        cx="170" cy="160" r="95" fill="#ffe9c2"
        animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* зорепад */}
      {[[40, 60, 0], [280, 90, 1.1], [60, 250, 2], [285, 240, 2.7]].map(([x, y, delay], i) => (
        <motion.line
          key={i}
          x1={x} y1={y} x2={x + 24} y2={y + 24}
          stroke="#ffd27d" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ delay, duration: 1.4, repeat: Infinity, repeatDelay: 2.5 }}
        />
      ))}

      {/* конюшина на щастя */}
      <motion.g
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '170px 150px' }}
      >
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 8 }}
          style={{ transformOrigin: '170px 150px' }}
        >
          <g transform="translate(170 150)">
            <Leaf rotate={0} />
            <Leaf rotate={90} />
            <Leaf rotate={180} />
            <Leaf rotate={270} />
            <circle cx="0" cy="0" r="7" fill="#5a9648" />
          </g>
          {/* стебло */}
          <path d="M170 150 q-6 50 4 90" stroke="#5a9648" strokeWidth="5" fill="none" strokeLinecap="round" />
        </motion.g>
      </motion.g>

      {/* блискітки */}
      {[[120, 110], [220, 120], [150, 70], [200, 200], [130, 195]].map(([cx, cy], i) => (
        <motion.g
          key={i}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ delay: i * 0.4, duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <path
            d={`M${cx} ${cy - 7} L${cx + 2} ${cy - 2} L${cx + 7} ${cy} L${cx + 2} ${cy + 2} L${cx} ${cy + 7} L${cx - 2} ${cy + 2} L${cx - 7} ${cy} L${cx - 2} ${cy - 2} Z`}
            fill="#ffd27d"
          />
        </motion.g>
      ))}

      {/* сердечка, що піднімаються */}
      {[...Array(4)].map((_, i) => (
        <motion.text
          key={i}
          x={110 + i * 40} y={300}
          fontSize="18"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: [0, 1, 0], y: 230 }}
          transition={{ delay: i * 0.5, duration: 3, repeat: Infinity }}
        >
          💗
        </motion.text>
      ))}
    </svg>
  )
}
