export async function deleteAllAppoints() {
    await fetch('http://51.250.88.158:5000/appoints',
        {
            method: 'DELETE'
        })
        .then(() => console.log('yes'))
        .catch(e => console.log(e))
    return true
}