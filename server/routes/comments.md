ENDPOINT: /comments/:postId
METODO: get
ACCION: obtiene la lista de comentarios de un post
RESPONSE (ejemplo):
    [
        {
            id: 1,
            body: 'Muy buen post',
            user: {
                id: 23,
                username: 'ada'
            }
        },
        {
            id: 2,
            body: 'Gracias por la info',
            user: {
                id: 24,
                username: 'margaret'
            }
        }
    ]
    STATUS: 200        

-----------------------------------------------------

ENDPOINT: /comments/
METODO: post
ACCION: crea un comentario y lo guarda
RESPONSE (ejemplo):
BODY (ejemplo):
    {
        body: 'Me parece un ejemplo muy bueno',
        postId: 34,
        userId: 2
    }
RESPONSE (ejemplo):
    {
        message: 'Comentario agregado',
        id: 1 // (del comentario creado)
    }
    STATUS: 200      