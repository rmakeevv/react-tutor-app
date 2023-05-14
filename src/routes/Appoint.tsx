import {UserDataForm} from "../components/UserDataForm";
import image from '../assets/images/online-meet.jpg'
import {Link, useActionData} from "react-router-dom";
import {FC} from "react";
export const Appoint:FC = () => {
    const actionData: any = useActionData()

    if (actionData) {
        return (
            <div className={'container flex flex-col'} style={{alignItems: 'center', gap: '2rem'}}>
                <p>Спасибо!</p>
                <span>В ближайшее время с вами свяжется наш менеджер!</span>
                <Link to={'/'}>На главную</Link>
            </div>
        )
    }

    return (
        <div className={'container'}>
            <div className={'content__wrapper'} style={{alignItems: "center"}}>
                <img src={image} alt={'call'} width={'320px'} style={{borderRadius:'8px'}}/>
                <p>Оставьте заявку на бесплатный часовой урок!</p>
                <UserDataForm/>
            </div>
        </div>
    );
};