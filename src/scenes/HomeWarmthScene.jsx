import { motion } from 'framer-motion'

// Анімація: вона — затишок і дім. Нічний будиночок із теплим світлом,
// місяць, зорі, світлячки й дим зі сердечок.
const STARS = [
  [40, 50], [90, 35], [150, 28], [250, 40], [300, 60], [70, 90], [280, 110],
]
const FIREFLIES = [
  { x: 60, y: 250, dx: 18, dy: -14, delay: 0 },
  { x: 270, y: 240, dx: -16, dy: -20, delay: 0.8 },
  { x: 130, y: 300, dx: 22, dy: -10, delay: 1.4 },
  { x: 210, y: 305, dx: -14, dy: -18, delay: 2 },
  { x: 300, y: 280, dx: -20, dy: -16, delay: 2.6 },
]

export default function HomeWarmthScene() {
  return (
    <svg viewBox="0 0 340 340" width="100%" height="100%" aria-hidden>
      {/* зорі, що мерехтять */}
      {STARS.map(([cx, cy], i) => (
        <motion.circle
          key={i} cx={cx} cy={cy} r="1.8" fill="#ffd27d"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* місяць із м'яким сяйвом */}
      <motion.circle
        cx="285" cy="55" r="30" fill="#fff3cf"
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.12, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <circle cx="285" cy="55" r="17" fill="#fff3cf" />
      <circle cx="293" cy="50" r="13" fill="#ffe9c2" />

      {/* пульсуюча тепла аура навколо дому */}
      <motion.circle
        cx="170" cy="200" r="105" fill="#ffe9c2"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ transformOrigin: '170px 200px' }}
      />

      {/* будиночок */}
      <g>
        <rect x="100" y="180" width="140" height="110" rx="8" fill="#f0d2b4" />
        {/* дах */}
        <path d="M88 184 L170 118 L252 184 Z" fill="#d36f86" />
        {/* двері */}
        <rect x="155" y="232" width="30" height="58" rx="6" fill="#b06b86" />
        {/* сердечко на дверях, що б'ється */}
        <motion.text
          x="170" y="252" textAnchor="middle" fontSize="13"
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '170px 248px' }}
        >
          💗
        </motion.text>
        {/* вікна з теплим світлом */}
        {[[120, 205], [200, 205]].map(([x, y], i) => (
          <g key={i}>
            <rect x={x} y={y} width="26" height="26" rx="4" fill="#3a2f44" />
            <motion.rect
              x={x + 2} y={y + 2} width="22" height="22" rx="3" fill="#ffd27d"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6 }}
            />
            <line x1={x + 13} y1={y} x2={x + 13} y2={y + 26} stroke="#3a2f44" strokeWidth="2" />
            <line x1={x} y1={y + 13} x2={x + 26} y2={y + 13} stroke="#3a2f44" strokeWidth="2" />
          </g>
        ))}
        {/* комин */}
        <rect x="210" y="135" width="18" height="32" fill="#b06b86" />
      </g>

      {/* дим зі сердечок */}
      {[...Array(5)].map((_, i) => (
        <motion.text
          key={i}
          x="219" y="130"
          fontSize={12 + i * 2}
          textAnchor="middle"
          initial={{ opacity: 0, y: 130, x: 219 }}
          animate={{ opacity: [0, 1, 0], y: 50, x: 219 + (i % 2 ? 14 : -10) }}
          transition={{ delay: i * 0.6, duration: 3.2, repeat: Infinity }}
        >
          💗
        </motion.text>
      ))}

      {/* світлячки, що ширяють навколо дому */}
      {FIREFLIES.map((f, i) => (
        <motion.g
          key={i}
          animate={{ x: [0, f.dx, 0], y: [0, f.dy, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
        >
          <motion.circle
            cx={f.x} cy={f.y} r="3.5" fill="#fff3a8"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: f.delay }}
          />
          <motion.circle
            cx={f.x} cy={f.y} r="7" fill="#fff3a8"
            animate={{ opacity: [0, 0.35, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: f.delay }}
          />
        </motion.g>
      ))}

      {/* кущики */}
      <circle cx="96" cy="288" r="16" fill="#8fbd74" />
      <circle cx="244" cy="288" r="16" fill="#8fbd74" />
    </svg>
  )
}
