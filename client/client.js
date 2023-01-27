const net = require('net')

var miIP=''
datos()
function datos(){
    miIP =prompt("Ingrese el IP del servidor: ")

}

const options = {
    port: 4002,
    host: miIP
}

const client = net.createConnection(options)

client.on('connect', ()=>{
    console.log('Conexion satisfactoria!')
})

client.on ('data', (data)=>{
    console.log('El servidor dice:' + data)
})

client.on('error', (err)=>{
    console.log(err.message)
})

client.on('ready',()=>{
    sendLine()
})

function sendLine() {
    process.stdin.on('data',(data)=>{
        if (data.toString() == 0){
            client.end()
            process.exit(0)
        }
       
        client.write('escribe algo '+ data.toString())
    })
}