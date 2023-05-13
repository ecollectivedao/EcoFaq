import Typed from 'react-typed'

import './Promo.scss'

export const Promo = () => {
    return (
        <section className='promo'>
            <h1 className="promo__title">
                Eco - это не банк
            </h1>
            <h2 className="promo__subtitle">
                ЕСОсommunity - это сообщество людей с единой целью  
                
                <span className='promo__typing'>
                <Typed
                     strings={['развитие',
                                'обучение',
                                'объедение']}
                     typeSpeed={150}
                     backSpeed={100}
                     startDelay={1500}
                     loop
                />
                </span>
                для ЕСОпротокола
            </h2>
            <p className="promo__descr">
                На данном сайте вы узнаете всю основную информацию по проекту ЕСО, актуальные задания, перевод важных документов и т.д <br />
                Сайт находится на ранней стадии
            </p>
        </section>
    )
}