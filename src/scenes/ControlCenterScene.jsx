import { motion } from 'framer-motion'

// Анімація: ніч, чоловік спить, дружина в "центрі управління" — стежить
// за тривогами в телефоні, поки за вікном спалахи. Вона — наш захист.
export default function ControlCenterScene() {
  return (
    <svg viewBox="0 0 340 380" width="100%" height="100%" aria-hidden>
      {/* стіна кімнати */}
      <rect x="0" y="0" width="340" height="300" fill="#3a2f44" />
      <rect x="0" y="290" width="340" height="90" fill="#2a2233" />

      {/* вікно */}
      <rect x="40" y="30" width="120" height="130" rx="6" fill="#14101f" />
      {/* нічне небо за вікном */}
      <clipPath id="win">
        <rect x="46" y="36" width="108" height="118" rx="3" />
      </clipPath>
      <g clipPath="url(#win)">
        <rect x="46" y="36" width="108" height="118" fill="#1b1430" />
        {/* зірки */}
        {[[70, 60], [120, 50], [95, 80], [135, 95], [60, 100]].map(([cx, cy], i) => (
          <motion.circle
            key={i} cx={cx} cy={cy} r="1.5" fill="#fff"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + i, repeat: Infinity }}
          />
        ))}
        {/* силуети будинків */}
        <rect x="46" y="120" width="22" height="40" fill="#0e0a1a" />
        <rect x="74" y="105" width="18" height="55" fill="#0e0a1a" />
        <rect x="98" y="125" width="24" height="35" fill="#0e0a1a" />
        <rect x="128" y="110" width="20" height="50" fill="#0e0a1a" />
        {/* спалахи вибухів */}
        {[[100, 70, 0], [70, 90, 1.3], [130, 60, 2.4]].map(([cx, cy, delay], i) => (
          <motion.g key={i}>
            <motion.circle
              cx={cx} cy={cy} r="18" fill="#ff8a3d"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 0], opacity: [0, 0.9, 0] }}
              transition={{ delay, duration: 1.1, repeat: Infinity, repeatDelay: 3.2 }}
            />
            <motion.circle
              cx={cx} cy={cy} r="8" fill="#ffe08a"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
              transition={{ delay, duration: 1.1, repeat: Infinity, repeatDelay: 3.2 }}
            />
          </motion.g>
        ))}
      </g>
      {/* рама вікна */}
      <line x1="100" y1="36" x2="100" y2="154" stroke="#14101f" strokeWidth="4" />
      <line x1="46" y1="95" x2="154" y2="95" stroke="#14101f" strokeWidth="4" />

      {/* спалах, що відблискує на стіні */}
      <motion.rect
        x="0" y="0" width="340" height="300" fill="#ff8a3d"
        animate={{ opacity: [0, 0.12, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 3.2 }}
      />

      {/* ліжко */}
      <rect x="20" y="250" width="300" height="70" rx="10" fill="#5a4a5e" />
      <rect x="20" y="238" width="300" height="22" rx="8" fill="#6b586f" />
      {/* ковдра */}
      <path d="M40 290 q120 -26 260 0 v30 h-260 Z" fill="#b06b86" />
      <path d="M40 290 q120 -26 260 0" fill="none" stroke="#c98aa0" strokeWidth="3" />

      {/* подушки */}
      <rect x="34" y="252" width="60" height="30" rx="12" fill="#f3e3da" />
      <rect x="246" y="252" width="60" height="30" rx="12" fill="#f3e3da" />

      {/* чоловік спить (зліва, лежить) */}
      <circle cx="70" cy="262" r="17" fill="#e8c9a0" />
      <path d="M61 260 q4 -3 8 0 M73 260 q4 -3 8 0" stroke="#5a4a5e" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M64 270 q6 4 12 0" stroke="#5a4a5e" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Zzz */}
      {['Z', 'z', 'z'].map((z, i) => (
        <motion.text
          key={i}
          x={92 + i * 12} y={250 - i * 14}
          fontSize={16 - i * 3} fill="#cdb6d0" fontWeight="700"
          animate={{ opacity: [0, 1, 0], y: [250 - i * 14, 236 - i * 14] }}
          transition={{ delay: i * 0.5, duration: 2.4, repeat: Infinity }}
        >
          {z}
        </motion.text>
      ))}

      {/* дружина сидить (справа), дивиться в телефон */}
      <g>
        {/* тулуб */}
        <path d="M250 320 q0 -50 26 -54 q26 4 26 54 Z" fill="#7a5a8e" />
        {/* голова */}
        <circle cx="276" cy="250" r="18" fill="#f0d2b4" />
        {/* волосся */}
        <path d="M258 250 q0 -22 18 -22 q18 0 18 22 q-6 -10 -18 -10 q-12 0 -18 10 Z" fill="#6b4a3a" />
        <path d="M258 250 q-3 14 2 26 l5 -2 q-4 -12 -2 -22 Z" fill="#6b4a3a" />
        {/* руки тримають телефон */}
        <rect x="262" y="276" width="28" height="18" rx="4" fill="#f0d2b4" transform="rotate(-8 276 285)" />
      </g>

      {/* телефон зі світінням (центр управління) */}
      <motion.g
        animate={{ filter: ['brightness(1)', 'brightness(1.25)', 'brightness(1)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <rect x="252" y="268" width="22" height="34" rx="4" fill="#1f2937" transform="rotate(-12 263 285)" />
        <rect x="255" y="272" width="16" height="26" rx="2" fill="#7fe3c0" transform="rotate(-12 263 285)" />
      </motion.g>
      {/* сяйво телефону на обличчі */}
      <motion.circle
        cx="266" cy="278" r="26" fill="#7fe3c0"
        animate={{ opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* радар-моніторинг над телефоном */}
      <motion.g animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity }}>
        <text x="276" y="232" textAnchor="middle" fontSize="16">📡</text>
      </motion.g>
    </svg>
  )
}
