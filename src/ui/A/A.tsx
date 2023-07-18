import { motion } from 'framer-motion'
import { textAnimation } from 'config/animation'

import './A.scss'

type AProps = {
    link: string,
    children: string,
    position?: string
}

export const A = ({ link, children, position }: AProps) => {
    return (
        <motion.a
            href={link}
            target='_blank'
            className={position ? 'animated-link right' : 'animated-link'}
            initial='hidden'
            whileInView='visible'
            variants={textAnimation}
            custom={0.2}
            viewport={{ amount: 0.1, once: true }}>
                {children}
        </motion.a>
    )
}
