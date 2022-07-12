import express, { Request, Response } from 'express';

const server = express();

server.get('/', (request: Request, response: Response)=> {
    //TODAS FUNCIONALIDADES
    return response.json({mensagem: 'Bem Vindo a nossa DIO API'})
})

server.listen(5000, () => {
    console.log('Servidor on na porta 5000 http://localhost:5000/')
})

// Criar usuario - C
// Selecionar usuario - R
// Editar usuario - U
// Deletar usuario - D

//Verbos HTTP:
//GET
//PUT/PATCH
//UPDATE
//DELETE