import './Explanation.scss'

type ExplanationProps = {
    name: string,
    explain: string
}

export const Explanation = ({name, explain}: ExplanationProps) => {
    return (
        <p className="block-primary__text">
            <strong>{name}</strong> - {explain}
        </p>
    )
}