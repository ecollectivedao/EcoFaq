import Typed from 'react-typed'
import promo from 'assets/img/promo.png'


import './Promo.scss'

import { Link } from 'react-scroll'

export const Promo = () => {
    return (
        <section className='promo'>
            <div className="container promo__container">
                <h1 className="promo__subtitle">
                    ЕСОmmunity
                </h1>
                <p className="promo__descr">
                    Сообщество людей с единой целью для ЕСО протокола. На этом сайте Вы найдете информацию о проекте ЕСО, задания, перевод документов и многое другое. Сайт находится на ранней стадии.
                </p>

                <Link
                    className='button'
                    to="join-us"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Присоединяйся к нам
                </Link>

                {/* <div className="promo__poster"> */}
                <img className='promo__image' src={promo} alt="promo" />
                {/* </div> */}
                
            </div>
        </section>
    )
}