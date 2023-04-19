import {motion} from 'framer-motion'

import { imageReveal } from 'config/animation'


type ImgProps = {
    src: string
}
export const Img = ({src}: ImgProps) => {
  return (
    <motion.img 
    src={src} alt="image" 
    className="image-animated"
    initial='hidden'
    whileInView='visible'
    variants={imageReveal}
    viewport={{amount: 0.1, once: true}}
    custom={0.2}
     />
  )
}
