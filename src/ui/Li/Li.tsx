import { motion } from 'framer-motion'
import { textAnimation } from 'config/animation'

import './Li.scss'

type LiProps = {
    children: React.ReactNode
}

export const Li = ({children}: LiProps) => {

    return (
        <motion.li
            className='li-animated'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            variants={textAnimation}
            custom={0.2}>
            {children}
        </motion.li>
    )
}
