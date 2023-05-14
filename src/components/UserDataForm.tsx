import {Form} from "react-router-dom";
import './UserDataForm.css'

export const UserDataForm = () => {
    return (
        <Form method={'post'} className={'appoint-form'}>
            <input type={'text'} name={'username'} required={true} placeholder={'username'}/>
            <input type={'text'} name={'phone'} required={true} placeholder={'phone'}/>
            <input type={'text'} name={'email'} required={true} placeholder={'email'}/>
            <button type={'submit'} className={'submit-appoint'}>Отправить</button>
        </Form>
    );
};