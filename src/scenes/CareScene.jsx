import { motion } from 'framer-motion'

// Анімація турботи: ліки, смаколики й кава з Бейлісом обертаються навколо серця.
// Кожна іконка підписана, щоб було зрозуміло, що це.
function Orbit({ children, label, radius, duration, delay = 0 }) {
  return (
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
      style={{ transformOrigin: '170px 170px' }}
    >
      <g transform={`translate(170, ${170 - radius})`}>
        {/* контр-обертання, щоб іконки лишались рівними */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
        >
          {children}
          {label && (
            <text x="0" y="34" textAnchor="middle" fontSize="11" fontWeight="700" fill="#8a5a6d">
              {label}
            </text>
          )}
        </motion.g>
      </g>
    </motion.g>
  )
}

/* Ліки: блістер + капсула */
const Pills = () => (
  <g>
    <rect x="-22" y="-12" width="30" height="20" rx="4" fill="#cfe0f5" stroke="#9bb6d8" strokeWidth="1.5" />
    {[-15, -7, 1].map((x) => (
      <circle key={x} cx={x} cy="-2" r="3.5" fill="#fff" stroke="#9bb6d8" strokeWidth="1" />
    ))}
    <g transform="rotate(35 14 2)">
      <rect x="2" y="-7" width="26" height="14" rx="7" fill="#e07a92" />
      <rect x="2" y="-7" width="13" height="14" rx="7" fill="#ffd27d" />
      <rect x="2" y="-7" width="26" height="14" rx="7" fill="none" stroke="#d36f86" strokeWidth="1.2" />
    </g>
  </g>
)

/* Чізкейк: шматок із ягідкою */
const Cheesecake = () => (
  <g>
    <path d="M-20 12 L18 12 L8 -14 Z" fill="#f6e3b0" />
    <path d="M-20 12 L18 12 L14 2 L-20 2 Z" fill="#e8c98a" />
    <rect x="-20" y="12" width="38" height="6" rx="2" fill="#c79a5b" />
    <circle cx="2" cy="-6" r="4" fill="#d3486b" />
    <path d="M2 -10 q3 -3 5 -1" stroke="#7faa6a" strokeWidth="2" fill="none" strokeLinecap="round" />
  </g>
)

/* Вупі-пай: дві шоколадні половинки з кремом */
const Whoopie = () => (
  <g>
    <path d="M-18 0 a18 12 0 0 1 36 0 Z" fill="#6b4a3a" />
    <path d="M-18 0 a18 12 0 0 0 36 0 Z" fill="#5a3d30" />
    <rect x="-18" y="-4" width="36" height="8" rx="4" fill="#fff4e6" />
  </g>
)

/* Кава з Бейлісом: чашка з вершковим шаром і парою */
const CoffeeBaileys = () => (
  <g>
    <path d="M-14 -10 h26 v8 a13 13 0 0 1 -26 0 Z" fill="#fff" />
    <path d="M-14 -10 h26 v3 a13 11 0 0 1 -26 0 Z" fill="#e8d3b0" />
    <path d="M-13 -3 a12 12 0 0 0 24 0 Z" fill="#5a3a2a" opacity="0.85" />
    <path d="M12 -8 h6 a6 6 0 0 1 0 12 h-4" fill="none" stroke="#fff" strokeWidth="3" />
    {/* пара */}
    <motion.path
      d="M-4 -16 q4 -6 0 -12 M4 -16 q4 -6 0 -12"
      stroke="#e3b778" strokeWidth="2" fill="none" strokeLinecap="round"
      animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -3, 0] }}
      transition={{ duration: 1.8, repeat: Infinity }}
    />
  </g>
)

/* Смачна їжа: тарілка з гарячою стравою */
const Food = () => (
  <g>
    <ellipse cx="0" cy="6" rx="20" ry="7" fill="#dfe6ee" />
    <ellipse cx="0" cy="3" rx="20" ry="8" fill="#fff" />
    <ellipse cx="0" cy="2" rx="13" ry="5" fill="#f0a9b6" />
    <circle cx="-4" cy="0" r="4" fill="#e3b778" />
    <circle cx="5" cy="2" r="3.5" fill="#8fbd74" />
    <circle cx="0" cy="4" r="3" fill="#d36f86" />
    <motion.path
      d="M-3 -8 q4 -5 0 -10 M4 -8 q4 -5 0 -10"
      stroke="#e3b778" strokeWidth="2" fill="none" strokeLinecap="round"
      animate={{ opacity: [0.2, 0.8, 0.2] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </g>
)

export default function CareScene() {
  const R = 122
  const DUR = 26
  return (
    <svg viewBox="0 0 340 340" width="100%" height="100%" aria-hidden>
      <motion.circle
        cx="170" cy="170" r="128" fill="none" stroke="#f7d9d0" strokeWidth="2" strokeDasharray="3 9"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '170px 170px' }}
      />

      {/* центральне серце-турбота */}
      <motion.path
        d="M170 214 C 134 188 116 168 116 146 C 116 128 130 116 146 116 C 158 116 166 124 170 132 C 174 124 182 116 194 116 C 210 116 224 128 224 146 C 224 168 206 188 170 214 Z"
        fill="#e07a92"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        style={{ transformOrigin: '170px 165px' }}
      />
      <text x="170" y="172" textAnchor="middle" fontSize="26" role="img">💗</text>

      <Orbit radius={R} duration={DUR} label="ліки"><Pills /></Orbit>
      <Orbit radius={R} duration={DUR} delay={-DUR / 5} label="чізкейк"><Cheesecake /></Orbit>
      <Orbit radius={R} duration={DUR} delay={(-DUR * 2) / 5} label="вупі-пай"><Whoopie /></Orbit>
      <Orbit radius={R} duration={DUR} delay={(-DUR * 3) / 5} label="кава з Бейлісом"><CoffeeBaileys /></Orbit>
      <Orbit radius={R} duration={DUR} delay={(-DUR * 4) / 5} label="смаколики"><Food /></Orbit>
    </svg>
  )
}
