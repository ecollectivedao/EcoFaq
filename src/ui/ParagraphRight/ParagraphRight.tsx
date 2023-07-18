import { motion } from 'framer-motion'

import './ParagraphRight.scss'

import { textAnimation } from 'config/animation'

export const ParagraphRight = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.p
            initial='hidden'
            whileInView='visible'
            variants={textAnimation}
            viewport={{ amount: 0.1, once: true }}
            custom={0.2}
            className='paragraph-right'>{children}</motion.p>
    )
}
