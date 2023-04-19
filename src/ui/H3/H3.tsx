import {motion} from 'framer-motion'

import { textAnimation } from 'config/animation'

import './H3.scss'

type H3Props = {
    children: React.ReactNode
}

export const H3 = ({children}: H3Props) => {
    return (
        <motion.h3
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            custom={0.2}
            variants={textAnimation}
            className="title-animated">{children}
        </motion.h3>
    )
}

