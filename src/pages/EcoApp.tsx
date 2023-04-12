import { SecondaryLayout } from 'layouts/SecondaryLayout'

export const EcoApp = () => {
    return (
        <SecondaryLayout>
            <section className="block-primary">
                <h2 className="block-primary__title">
                    Eco app
                </h2>
                <p className="block-primary__subtitle">Пользоватся ЕСО арр могут только участники,которые находятсяв США</p>
                <h3 className="block-primary__sm">
                    В настоящее время Eco доступен только на iPhone.
                </h3>
                <p className="block-primary__text">
                    Eco App это мобильное приложение, в котором реализованы все функции EСО, а именно: пополнение счета, перевод средств, оплата услуг и товаров, проценты на остаток на счете и кэшбек за покупки.
                </p>
                <p className="block-primary__text">
                    Если у вас есть iPhone, и вы находитесь <a href="http://localhost:3001/eco-app" className="block-primary__link">в штате, соответствующем требованиям,</a> посетите сайт eco.com и зарегистрируйтесь !
                    После этого вы можете загрузить приложение Eco для iPhone <a href="https://apps.apple.com/us/app/eco-take-your-cash-back/id1502464960" className="block-primary__link">здесь.</a>
                </p>
                <p className="block-primary__text">
                    Команда активно разрабатываем приложение Eco для Android и ПК.  Если хотите быть в курсе последних новостей: посетите сайт eco.com/waitlist и добавьте свое имя в лист ожидания.
                </p>
            </section>
        </SecondaryLayout>
    )
}
