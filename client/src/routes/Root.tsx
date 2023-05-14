import {Outlet, Link} from "react-router-dom";
import logo from '../assets/images/img.png'

export const Root = () => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <div className={'header__wrapper'}>
                    <div className={'header__title'}>
                        <img src={logo} alt={'logo'} width={'44px'} className={'logo'}/>
                        <Link to={'/'} className={'title'}>МЕНТОР.РУ</Link>
                    </div>
                    <div className={'header__menu'}>
                        <Link to={'/test'} className={'nav__link'}>Проверка знаний</Link>
                        <Link to={'/appoint'} className={'nav__link'}>Запись на бесплатный урок</Link>
                        <Link to={'/tutor'} className={'nav__link'}>Я репетитор</Link>
                    </div>
                </div>
            </div>
            <div className={'content'}>
                <Outlet/>
            </div>
        </div>
    );
};