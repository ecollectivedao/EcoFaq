import { motion } from 'framer-motion'

import { textAnimation } from 'config/animation'

import './Paragraph.scss'

type ParagraphProps = {
    children: React.ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => {
    return (
        <motion.p
            className="paragraph"
            initial='hidden'
            whileInView='visible'
            variants={textAnimation}
            viewport={{ amount: 0.1, once: true }}
            custom={0.2}
            >
            {children}
        </motion.p>
    )
}
