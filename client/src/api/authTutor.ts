export const authTutor = async ({request}: any ) => {
    const data = await request.formData()
    const password = data.get('pass')
    if (password === '1234') {
        return 'passed'
    }
    return 'Пароль неверный!'
}