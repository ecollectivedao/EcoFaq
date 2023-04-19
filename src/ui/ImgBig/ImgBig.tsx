import {motion} from 'framer-motion'

import { imageReveal } from 'config/animation'

type ImgBig = {
    src: string
}
export const ImgBig = ({ src }: ImgBig) => {
    return (
        <motion.img
            className='block-primary__img'
            src={src}
            alt="image"
            initial='hidden'
            whileInView='visible'
            variants={imageReveal}
            viewport={{ amount: 0.1, once: true }} 
            custom={0.2}
            />
    )
}