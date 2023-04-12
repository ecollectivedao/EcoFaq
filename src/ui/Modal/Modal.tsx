import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Backdrop } from '../Backdrop/Backdrop'
import { Portal } from 'ui'

import './Modal.scss'

type ModalProps = {
    children?: React.ReactNode
    modalSwitcher?: () => void
}

export const Modal = ({ children, modalSwitcher }: ModalProps) => {
    return (
        <Portal>
            <AnimatePresence>
                <Backdrop onHandler={modalSwitcher} />
                <motion.div
                    key='modal'
                    className='modal'
                    initial={{ x: `-50%`, y: `-50%`, scale: 0.5 }}
                    animate={{ x: `-50%`, y: `-50%`, scale: 1, }}
                    exit={{ x: `-50%`, y: `-50%`, scale: 0.5, opacity: 0, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.2, ease: [0.165, 0.840, 0.440, 1.000] }}
                >
                    <button
                        className='modal__close'
                        onClick={modalSwitcher}
                    >&times;</button>
                    <div className='modal__inner'>

                        {children}

                    </div>
                </motion.div>
            </AnimatePresence>
        </Portal>
    )
}