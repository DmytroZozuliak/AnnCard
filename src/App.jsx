import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import StartScene from './scenes/StartScene.jsx'
import BeautyScene from './scenes/BeautyScene.jsx'
import KindScene from './scenes/KindScene.jsx'
import CareScene from './scenes/CareScene.jsx'
import ControlCenterScene from './scenes/ControlCenterScene.jsx'
import HomeWarmthScene from './scenes/HomeWarmthScene.jsx'
import LuckyScene from './scenes/LuckyScene.jsx'
import FinalScene from './scenes/FinalScene.jsx'
import Confetti from './Confetti.jsx'

// Усі кроки привітання. Перший — стартовий, решта — компліменти.
const STEPS = [
  {
    type: 'start',
    Scene: StartScene,
    kicker: '22 червня',
    title: 'З Днем народження, Анюто! 🌷',
    lead: 'Я приготував для тебе маленьку подорож із компліментів. Готова почати своє свято?',
    cta: 'Почати своє свято',
  },
  {
    Scene: BeautyScene,
    kicker: null,
    title: 'Яка ти прекрасна',
    lead: 'Щоразу, коли я дивлюся на тебе, у мені розквітають цілі сади. Ти найкрасивіша квітка в моєму житті.',
  },
  {
    Scene: KindScene,
    kicker: null,
    title: 'Яка ти добра',
    lead: 'Твоя доброта зігріває, як сонце. Ти даруєш тепло всім навколо — і мені найбільше.',
  },
  {
    Scene: CareScene,
    kicker: null,
    title: 'Як ти дбаєш про мене',
    lead: 'Вітамінки, смачна їжа, гарячий чай і твоя турбота — завдяки тобі я почуваюся найдоглянутішим чоловіком на світі.',
  },
  {
    Scene: ControlCenterScene,
    kicker: null,
    title: 'Мій нічний вартовий',
    lead: 'Поки я сплю, ти стежиш за обстановкою в «центрі управління». За вікном вибухи — а я спокійний, бо ти поруч і все контролюєш. Ти — мій захист.',
  },
  {
    Scene: HomeWarmthScene,
    kicker: null,
    title: 'Ти — мій дім',
    lead: 'Де б ми не були, з тобою завжди затишно й тепло. Ти наповнюєш наш дім любов’ю, сміхом і світлом.',
  },
  {
    Scene: LuckyScene,
    kicker: null,
    title: 'Як мені пощастило бути з тобою',
    lead: 'Кожен день поруч із тобою — це виграш у найбільшій лотереї. Найщасливіший білет у моєму житті — це ти.',
  },
  {
    type: 'final',
    Scene: FinalScene,
    kicker: 'І найголовніше',
    title: 'Як сильно я тебе люблю',
    lead: 'Більше за вчора, менше за завтра. Дякую, що ти є. З Днем народження, моя кохана Анюто! Я кохаю тебе безмежно. ❤️',
    cta: 'Почати спочатку',
  },
]

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
}

export default function App() {
  const [[index, dir], setState] = useState([0, 0])
  const step = STEPS[index]
  const { Scene } = step
  const isFirst = index === 0
  const isLast = index === STEPS.length - 1

  const go = useCallback(
    (next) => {
      const d = next > index ? 1 : -1
      setState([next, d])
    },
    [index]
  )

  const handleCta = () => {
    if (isLast) go(0)
    else go(index + 1)
  }

  return (
    <div className="app">
      <div className="bg-glow" />

      {/* Конфеті на фінальному екрані */}
      {step.type === 'final' && <Confetti />}

      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={index}
          className="stage"
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="scene">
            <Scene />
          </div>

          {step.kicker && <p className="kicker">{step.kicker}</p>}
          <h1 className="title">{step.title}</h1>
          <p className="lead">{step.lead}</p>

          {step.cta && (
            <motion.button
              className="cta"
              onClick={handleCta}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {step.cta}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Навігація завжди в DOM (на старті прихована), щоб футер не стрибав */}
      <nav className={`nav ${isFirst ? 'is-hidden' : ''}`} aria-hidden={isFirst}>
        <button className="nav-btn ghost" onClick={() => go(index - 1)} tabIndex={isFirst ? -1 : 0}>
          ← Назад
        </button>

        <div className="dots">
          {STEPS.slice(1).map((_, i) => (
            <span key={i} className={`dot ${i + 1 === index ? 'active' : ''}`} />
          ))}
        </div>

        <button
          className="nav-btn"
          onClick={() => go(index + 1)}
          disabled={isLast}
          tabIndex={isFirst ? -1 : 0}
        >
          Далі →
        </button>
      </nav>
    </div>
  )
}
