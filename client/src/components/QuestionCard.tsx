import './QuestionCard.css'
interface QuestionCardProps {
    options: Array<string>,
    question: string,
    answer: string,
    name: number
}

export const QuestionCard = ({options, question, name}: QuestionCardProps) => {

    return (
        <div className={'question-card'}>
            <strong>{question}</strong>
            {
                options.map((item,key) => {
                    return (
                        <div key={key}>
                            <label>{item}</label>
                            <input type={"radio"} name={`${name}`} value={item} required={true}/>
                        </div>
                    )
                })
            }
        </div>
    );
};