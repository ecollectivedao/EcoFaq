import Typed from 'react-typed'

import './Promo.scss'

export const Promo = () => {
    return (
        <section className='promo'>
            <h1 className="promo__title">
                Eco - это не банк
            </h1>
            <h2 className="promo__subtitle">
                Eco - это один простой баланс, который позволяет вам   
                
                <span className='promo__typing'>
                <Typed
                     strings={['тратить',
                                'отправлять',
                                'сохранять', 
                            'зарабатывать']}
                     typeSpeed={150}
                     backSpeed={100}
                     startDelay={1500}
                     loop
                />
                </span>
                деньги.
            </h2>
            <p className="promo__descr">
                На данном сайте вы узнаете всю основную информацию по проекту ЕСО, актуальные задания, перевод важных документов и т.д <br />
                Сайт находится на ранней стадии
            </p>
        </section>
    )
}