const {JsonDB, Config} = require('node-json-db')

const db = new JsonDB(new Config("dataBase", true, false, '/'));

async function insertData(data) {
    await db.push("/appoints",[data], false);

}

async function deleteData() {
    await db.delete('/appoints')
}

async function getMyData() {
    return await db.getData("/appoints")
}

module.exports = {db, getMyData, insertData, deleteData}