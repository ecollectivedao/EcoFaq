import { Paragraph } from 'ui'
import './Explanation.scss'

type ExplanationProps = {
    name: string,
    explain: string
}

export const Explanation = ({name, explain}: ExplanationProps) => {
    return (
        <Paragraph>
            <strong>{name}</strong> - {explain}
        </Paragraph>
    )
}