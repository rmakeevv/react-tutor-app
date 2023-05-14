export async function sendTest({request}: any) {
    const formData = await request.formData()
    const data = [...formData.values()]
    return  await fetch('http://localhost:5000/test', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => res)
        .catch(e => console.log(e))
}