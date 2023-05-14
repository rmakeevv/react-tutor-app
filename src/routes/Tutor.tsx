import {Form, Link, useActionData} from 'react-router-dom'

export const Tutor = () => {
    const actionData: string | any = useActionData()

    if (actionData === 'passed'){
        return  (
            <div className={'container'}>
                <h1>Аутентификация пройдена!</h1>
                <Link to={'/appoints'} style={{borderRadius: '8px', background:'thistle', padding: '1rem 2rem'}}>Просмотреть заявки</Link>
            </div>
        )
    }

    return (
        <div className={'container'}>
            <p style={{textAlign: 'center'}}>Введите пароль:</p>
            <Form method={'post'} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                <input type={'text'} name={'pass'} required={true} placeholder={'пароль'}/>
                <button type={'submit'} className={'submit-appoint'}>Войти</button>
            </Form>
            <p style={{textAlign: 'center'}}>{actionData || ''}</p>
        </div>
    );
};