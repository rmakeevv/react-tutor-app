export async function getAllAppoints() {
    const data = await fetch('http://51.250.88.158:5000/appoints')
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
    return data || null
}