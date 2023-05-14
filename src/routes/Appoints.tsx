import {Form, useActionData, useLoaderData} from "react-router-dom";
import {FC} from "react";

interface IUserAppointData {
    userName: string,
    phone: number,
    email: string

}
export const Appoints:FC = () => {
    const data: Array<any> | any = useLoaderData()
    const actionState: boolean | any = useActionData()

    if (actionState) {
        return (
            <div className={'container'}>
                Список заявок очищен!
            </div>
        )
    }
    console.log(data)

    if (data.id) {
        return (
            <div className={'container'}>
                Список заявок пуст!
            </div>
        )
    }

    return (
        <div className={'container content__wrapper'}>
            <strong>Заявки: {data.length}</strong>
            <Form method={'delete'}>
                <button type={'submit'} className={'submit-appoint'}>Очистить список</button>
            </Form>
            {
                data.map((item: IUserAppointData, key:number) => {
                    return (
                        <div key={key} style={{display: 'flex', flexDirection: 'column', borderBottom: '1px solid black', paddingTop: '1rem'}}>
                            <p>Номер телефона: {item.phone} <br/> Имя:{item.userName} <br/> Почта:{item.email}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};