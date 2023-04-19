import { motion } from 'framer-motion'

import { textAnimation } from 'config/animation'

import './Subtitle.scss'


type SubtitleProps = {
    children: React.ReactNode
}

export const Subtitle = ({ children }: SubtitleProps) => {
    return (
        <motion.h4
            className='subtitle'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            variants={textAnimation}
            custom={0.2}>
            {children}
        </motion.h4>
    )
}
