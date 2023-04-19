import { textAnimation } from "config/animation"
import { motion } from "framer-motion"

import './H4.scss'

type H4Props = {
    children: React.ReactNode
}

export const H4 = ({children}: H4Props) => {
  return (
    <motion.h4
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            custom={0.2}
            variants={textAnimation}
            className="title-animated__sm">{children}
        </motion.h4>
  )
}
