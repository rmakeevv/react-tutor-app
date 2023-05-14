import welcomeImage from '../assets/images/img_1.png'
import {Link} from "react-router-dom";
import {FC} from "react";
export const Main:FC = () => {
    return (
        <>
            <div className={'container'}>
                <div className={'welcome-message'}>
                    <div style={{display:'flex', flexDirection: 'column', alignItems: 'start', justifyContent:'center'}}>
                        <h1 style={{marginTop: '2rem'}}>Лучший сайт для поиска репетитора!</h1>
                        <span>Платформа №1 в России</span>
                        <p>Начни учиться сейчас</p>
                        <Link to={'/test'} className={'submit'}>Пройти тест знаний!</Link>
                    </div>
                    <img src={welcomeImage} alt={'welcome'} className={'welcome-picture'}/>
                </div>
            </div>
            <div className={'online-welcome'}>
                <div className={'container'}>
                    <h2>Начните учиться уже сейчас!</h2>
                    <Link to={'/appoint'} style={{color:'black', background: 'white', padding:'1rem 2rem', fontSize:'20px', borderRadius: '12px'}}>Записаться на онлайн встречу</Link>
                </div>
            </div>
        </>

    )
};