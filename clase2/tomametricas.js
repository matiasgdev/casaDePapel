let mysql = require('mysql2')
let memticks = require('./memoriatics')
let _ = require('underscore')

;(function tomaMetricas() {
    let metrica = memticks.obtener()
    insertarMySQL(metrica)
    _.delay(tomaMetricas, 5000)
})()

function insertarMySQL(metrica) {
    let objConnection = {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'monitoreo'
    }

    let connection = null;
    connection = mysql.createConnection(objConnection);
    connection.connect(err => {
        if (err) {
            console.log(err)
            return;
        }
        // console.log('connectado')

        let strSQL = 'INSERT INTO eventos values (now(), "canthits", ?)'
        connection.query(strSQL, [metrica], (err, results)=>{
            if (err) {
                console.log(err)
                return
            }
            // console.log('insertado!!')
            connection.end()
        })
    })
}

module.exports = _.identity

