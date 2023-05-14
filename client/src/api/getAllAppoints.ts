export async function getAllAppoints() {
    const data = await fetch('http://localhost:5000/appoints')
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
    return data || null
}