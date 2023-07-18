import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { imageReveal, textAnimation, titleAnimation } from 'config/animation'

import './Button.scss'

type ButtonType = {
    children: React.ReactNode,
    link?: string,
    color?: 'black' | 'white' | 'gray',
    to?: string,
    noanim?: boolean
}
export const Button = ({ children, link, color, to, noanim }: ButtonType) => {

    if (to) return (
        <motion.div
            className={`button ${color}`}
            initial={noanim ? '' : 'hidden'}
            variants={textAnimation}
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            custom={0.2}>
            <Link
                to={to}
            className='button__link'
            // className={`button ${color}`}
            // initial='hidden'
            // whileInView='visible'
            // variants={textAnimation}
            // viewport={{ amount: 0.1, once: true }}
            // custom={0.2}
            >
                {children}
            </Link>
        </motion.div>

    )

    return (
        <motion.a
            target='_blank'
            href={link}
            className={`button ${color}`}
            initial={noanim ? '' : 'hidden'}
            variants={textAnimation}
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            custom={0.2}>
            {children}
        </motion.a>
    )
}
