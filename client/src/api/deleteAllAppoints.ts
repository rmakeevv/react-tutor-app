export async function deleteAllAppoints() {
    await fetch('http://localhost:5000/appoints',
        {
            method: 'DELETE'
        })
        .then(() => console.log('yes'))
        .catch(e => console.log(e))
    return true
}