import {Form} from "react-router-dom";
import {QuestionCard} from "./QuestionCard";
import './TestList.css'

export const TestList = ({apiData} :any) => {
    return (
        <div className={'container'}>
            <p style={{textAlign: 'center'}}>Пройдите простой тест на знания по Математике!</p>
            <Form style={{display:"flex", flexDirection: 'column', gap: '2rem', alignItems:'center'}} method={'post'}>
                {
                    apiData.map((item: any, key: number) => {
                        return (
                            <QuestionCard name={item.id} options={item.options} question={item.title} answer={item.answer} key={key}/>
                        )
                    })
                }
                <button type={'submit'} className={'submit-test'}>Проверить ответы</button>
            </Form>
        </div>
    );
};