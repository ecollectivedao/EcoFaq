import { A, Li } from 'ui'
import { H4 } from 'ui/H4/H4'

type QuestItemProps = {
  name: string,
  description?: string,
  award?: string,
  link: string,
  extralink?: string,
  rules: any
}

export const QuestItem = ({name, description, award, link, extralink, rules }: QuestItemProps) => {
  console.log(rules)

  const viewedRules = rules ? rules.map((rule: string, index: number) => <Li key={index}>{rule}</Li>) : null
  return (
    <Li>
        <h3 className="block-primary__big">{name}</h3>
        <p className="block-primary__text">
        {link && <a target='_blank' href={link}>Официальный анонс</a>}
        </p>
        <p className="block-primary__text"><strong>Награда</strong>: {award ? award : 'нет'}</p>
        {description && <p className="block-primary__text">{description}</p>}
        {rules && 
        <>
        <H4>Правила:</H4>
        <ul className='block-primary__list'>
          {viewedRules}
        </ul>
        </>
        }
        {extralink && <A link={extralink}>{extralink}</A>}
  
    </Li>
  )
}
