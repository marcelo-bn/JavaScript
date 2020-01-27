const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
})

// Array de mensagens
var messages = []
// Array de usuários (Login e ID)
var usuarios = []
// Array de nomes disponíveis
var nomes = []
// Horário local da chegada da mensagem
var hora = 0;
var min = 0;

io.on('connection', socket =>{
    console.log(`Socket conectado: ${socket.id}`)

    // Enviando mensagens anteriores para um único socket
    socket.emit('previousMessages', messages); 

    // Enviando mensagem para todos
    socket.on('sendMessage', data =>{
        let msg = `${dataLocal()} ${data.author}: ${data.message}`;
        messages.push(msg)
        io.sockets.emit('receivedMessage', msg); 
    })

    // Armazenando lista de usuários disponíveis
    socket.on('sendUser', data =>{
        usuarios.push(data);
        nomes.push(data.nome);
        // Ao se conectar recebe uma lista com todos os usuários
        socket.emit('usersList', nomes); 
        // Envia para todos que já estavam conectados o novo nome
        socket.broadcast.emit('usersListSingle', data.nome); 
    })

    // Socket desconectado
    socket.on('disconnect', () => {
        userOff(socket.id);
        // Envia para todos a lista de nomes atualizada
        io.sockets.emit('atualizarUsers', nomes);
    })

    // Exclui nome do socket que se desconectou
    function userOff(id){
        for(var x of usuarios){
            if(x.id == id){
                var aux = x.nome;
                for(var j of nomes){
                    if(j==aux){
                        nomes.splice(nomes.indexOf(j), 1);
                    }
                }
            }
        }
    }

    // Retorna hora e minuto local da mensagem recebida
    function dataLocal(){
        let data = new Date();
        hora = data.getHours();
        min = data.getMinutes();
        return `${hora}:${min} -`;
    }
})

// Escutando na porta 3000
server.listen(3000);