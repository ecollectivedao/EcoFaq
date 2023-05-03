import { Li, Paragraph } from 'ui'
import './Explanation.scss'

type ExplanationProps = {
    name: string,
    explain: string,
    subItems?: string[]
}

export const Explanation = ({name, explain, subItems}: ExplanationProps) => {
    const view = subItems?.map(item => {
        return <Li>{item}</Li>

    })
    return (
        <Paragraph>
            <strong>{name}</strong> - {explain}
            {subItems && <ul className='news__list'>
                {view}
            </ul>}
        </Paragraph>
    )
}