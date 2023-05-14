export interface TestQuestion {
    id: number,
    title: string,
    answer: string,
    options: Array<string>
}

export interface TestList extends Array<TestQuestion>{}

export async function getTest() {
    const data:TestList = await fetch("http://localhost:5000/test")
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
    return data || null
}