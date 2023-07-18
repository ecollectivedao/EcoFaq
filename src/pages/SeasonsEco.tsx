import { SecondaryLayout } from "layouts/SecondaryLayout"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { Heading, H3, Paragraph, A } from "ui"

import bg from 'assets/img/bg/16.png'


export const SeasonsEco = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      <Helmet>
        <title>Сезоны ECO</title>
        <meta name="description" content="Eco" />
        <meta name="keywords" content="eco, crypto" />
      </Helmet>
      <SecondaryLayout>
        <section className="block-primary">

          <Heading title='Сезоны ЕСО'>
            Сезоны
          </Heading>

          <img className='poster-bg' src={bg} alt="poster" />

          <H3>Сезон 1 официально закончится в пятницу, 31 марта 2023 г., 19:00.</H3>
          <H3>Cезон 2 официально начался 31 марта 2023 г. в 19.31</H3>

          <Paragraph>Сезон включает в себя три месяца, по итогом которых производится снимок баланса.
            Каждый участник Eco дискорд имеет право на клейм $ECO токены в конце каждого сезона, в соответствии с количеством поинтов на личном балансе на момент снимка.
          </Paragraph>
          <Paragraph>Первый сезон был направлен на создание процессов координации, установление приоритетов сообщества и предоставление участникам возможности проводить свои собственные вызовы и баунти в соответствии с долгосрочным ростом "культуры и вибраций" сообщества.

          </Paragraph>
          <Paragraph>
            Второй сезон будет основан на успехе первого сезона и представит новые задачи и возможности для развития экосистемы и подготовки ее членов к настоящему самоопределению!
          </Paragraph>
          <Paragraph>
            Мы любим говорить: "Поинты предназначены только для исследовательских целей".
            <strong> 4 января 2023</strong> года началась вторая фаза нашего эксперимента и стартовал первый сезон. 59 постоянных членов сообщества были назначены на роль "<Link to='/layer-3'>Layer 3</Link>" и получили задание распределять поинты в дискорд. Хотя поинты не имеют прямой стоимости, они представляют собой право на распределение % от большей суммы $ECO, которую Ассоциация выделила сообществу для финансирования этого проекта. Мы верим, что сообщества становятся сильнее и лучше подготовлены к решению проблем, когда они играют, учатся и растут вместе. Этот челендж представляет собой следующий шаг к этой цели для нашего сообщества, отличную возможность для новых членов принять участие и забавный эксперимент по координации и децентрализованному принятию решений, происходящий прямо здесь, в дискорде. поинты будут представлять собой право на процентное распределение общего пула вознаграждений в $ECO токены, на которые можно будет претендовать в конце каждого сезона.
          </Paragraph>
          <Paragraph>
            Коэффициент конвертации поинты в $ECO токены определяется утверждением бюджета, выделенным Eco ассоциации для каждого нового сезона, а также коллективным решением Layer 3, исходя из результатов сезона.
            Для организации активностей первого сезона, который стартовал 4 января 2023 и успешно завершился 31 марта 2023, был выделен пул вознаграждений в размере 1 000 000 $ECO токены.
            По результатам сезона каждый участник, имевший на балансе поинты мог обменять их в соотношении 1 поинт = 2,02 $ECO токена. <br />
            <A link='https://discord.com/login?redirect_to=%2Fchannels%2F768556386404794448%2F821228603622293515%2F1099053302945165454'>клейм $ECO токенов</A> стартовал 25 апреля 2023.
          </Paragraph>
          <H3>Дополнительные возможности</H3>
          <Paragraph>В рамках дальнейшего развития системы децентрализованного управления внутри Экосообщество в новом сезоне будет представлен механизм распределения вознаграждений за индивидуальный и коллективный вклад в развитие Экосообщество.
            Индивидуально или в составе коллектива, Layer 3 и активным членам Экосообщество будет предоставлена возможность подачи предложений на гранты для финансирования из пула Treasury Eco ассоциации.
            При финансировании предложений будет учитываться ценность и актуальность идей и проектов, представленных для сообщества.
            Примером создания успешно функционирующего коллектива, имеющего отдельный пул финансирования своей деятельности стал Builders Ecollective.
            С предложениями по финансированию проектов участников <A link='https://forums.eco.org/t/egp-006-builders-ecollective-incentive-program/214/1'>Builders Ecollective</A> вы можете подробнее ознакомиться <A link='https://снимок.org/#/builders.ecollective.xyz'>здесь</A></Paragraph>

        </section>
      </SecondaryLayout>
    </>
  )
}
