export const createUserAppoint = async ({request}: any) => {
    const data = await request.formData()
    const userName = data.get('username')
    const email = data.get('email')
    const phone = data.get('phone')
    const dataForApiRequest = {userName, email, phone}
    await fetch('http://localhost:5000/appoints', {
        method: 'POST',
        headers: {
            "Content-type": 'application/json;charset=utf-8'
        },
        body: JSON.stringify(dataForApiRequest)
    })
        .then(() => console.log('yes'))
        .catch(e => console.log(e))
    return true
}