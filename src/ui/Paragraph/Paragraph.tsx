import { motion } from 'framer-motion'

import { textAnimation } from 'config/animation'

import './Paragraph.scss'

type ParagraphProps = {
    children: React.ReactNode,
    dark?: boolean;
    noanim?: boolean
}

export const Paragraph = ({ children, dark, noanim }: ParagraphProps) => {
    return (
        <motion.p
            style={dark ? {color: 'var(--color-text)'}: {color: 'var(--color-text2)'}}
            className="paragraph"
            initial={noanim ? '' : 'hidden'}
            whileInView='visible'
            variants={textAnimation}
            viewport={{ amount: 0.1, once: true }}
            custom={0.2}
            >
            {children}
        </motion.p>
    )
}
