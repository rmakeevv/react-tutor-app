const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const questions = require('./questions')
const {getMyData, insertData, deleteData} = require('./db')

app.use(cors())
app.use(bodyParser.json())

app.get('/appoints', async (req, res) => {
    try {
        const data = await getMyData().then(data => data)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send(e)
    }

})

app.post('/appoints', async (req, res) => {
    try {
        const data = await req.body
        await insertData(data)
        return  res.status(200).send('ok')
    } catch (e) {
        console.log(e)
        return res.status(500).send(e)
    }

})

app.get('/test', (req, res) => {
    res.status(200).send(questions)
})

app.delete('/appoints', async (req, res) => {
    await deleteData()
    return res.status(200).send('ok')
})

app.post('/test', async (req,res) => {
    try {
        const data = await req.body
        const userAnswers = questions.map((item, index) => {
            if (data[index] === item.answer) {
                return {...item, answered: true, userAnswer: data[index]}
            }

            return  {...item, answered: false, userAnswer: data[index]}
        })
        const answeredQuestions = userAnswers.reduce((accumulator, currentValue) => {
            return currentValue.answered ? accumulator + 1 : accumulator
        }, 0)
        const checkout = {userAnswers, answeredQuestions}
        res.status(200).send(checkout)
    } catch (e) {
        console.log(e)
        return res.status(500).send(e)
    }

})



app.listen(5000, () => {
    console.log('Server started')
})