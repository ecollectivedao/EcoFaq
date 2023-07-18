import { motion } from 'framer-motion'

import './H2.scss'
import { textAnimation } from 'config/animation'

type H2Type = {
  children: React.ReactNode
}
export const H2 = ({ children }: H2Type) => {
  return (
    <motion.h2
      className='title-animated__big'
      initial='hidden'
      whileInView='visible'
      variants={textAnimation}
      viewport={{ amount: 0.1, once: true }}
      custom={0.2}>
      {children}</motion.h2>
  )
}
