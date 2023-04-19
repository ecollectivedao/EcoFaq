import {motion} from 'framer-motion'

import { titleAnimation, textAnimation } from 'config/animation'

type TitleProps = {
  title: string,
  children: React.ReactNode
}

export const Heading = ({title, children}: TitleProps) => {
  return (
    <>
      <motion.h2 
        className="news__title"
        initial='hidden'
        animate='visible'
        variants={titleAnimation}>
          {title}
      </motion.h2>
      <motion.p
        initial='hidden'
        animate='visible'
        variants={textAnimation}
        custom={0.1}
        className="news__subtitle">
          {children}
          </motion.p>
    </>
  )
}
