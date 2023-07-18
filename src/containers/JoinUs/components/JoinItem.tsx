import { H4 } from 'ui/H4/H4'
import './JoinItem.scss'
import { Button, Paragraph } from 'ui'
import { motion } from 'framer-motion'
import { textAnimation } from 'config/animation'

type JoinItem = {
    children: React.ReactNode,
    image: React.ReactNode,
    title: string,
    link: string
}
export const JoinItem = ({ children, image, link, title }: JoinItem) => {
    return (
        <motion.li
            className="join-item"
            initial='hidden'
            whileInView='visible'
            variants={textAnimation}
            viewport={{ amount: 0.1, once: true }}
            custom={0.2}>
            {image}
            <H4 noanim>{title}</H4>
            <Paragraph noanim dark={true}>{children}</Paragraph>
            <Button noanim link={link}>Приосединиться</Button>
        </motion.li>
    )
}
