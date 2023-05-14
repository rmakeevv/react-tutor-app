import './TestResults.css'
import {Link} from "react-router-dom";

interface IQuestion {
    userAnswer: string,
    answer: string,
    answered: boolean,
    id: number,
    options: Array<string>,
    title: string
}

interface ITestResultsProps {
    answeredQuestions: any,
    userAnswers: Array<any>
}


export const TestResults = ({answeredQuestions, userAnswers}: ITestResultsProps) => {
    return (
        <div className={'result-container container'}>
            <span className={'result-info'}>Вы ответили верно на: {answeredQuestions}/{userAnswers.length}</span>
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem 0'}}>
                {
                    userAnswers.map((item: Partial<IQuestion>, key:number) => {
                        return (
                            <div key={key} style={{background: item.answered ? 'springgreen' : 'orangered', padding: '2rem', borderRadius: '12px'}}>
                                Вопрос {item.id}: {item.title} <br/>
                                Ваш ответ {item.userAnswer} <br/>
                                Вы ответили {item.answered ? 'верно' : 'неверно'} <br/>
                                Правильный ответ {item.answer}

                            </div>
                        )
                    })
                }
            </div>
            <h2 style={{textAlign:'center'}}> Запишитесь на онлайн консультацию!</h2>
            <Link to={'/appoint'} className={'submit-appoint'}>Записаться</Link>
        </div>
    );
};