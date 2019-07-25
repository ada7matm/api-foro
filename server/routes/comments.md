ENDPOINT: /comments
METODO: get
QUERY: post (id del post) o user (id del usuario)
ACCION: obtiene una lista de comentarios
RESPONSE (ejemplo):
    [
        {
            id: 1,
            body: 'Muy buen post',
            user: {
                id: 23,
                username: 'ada'
            }, 
            post: {
                id: 3,
                title: 'Como hacer una api'
            },
            community: {
                id: 3,
                name: 'Programacion'
            }
        },
        {
            id: 2,
            body: 'Gracias por la info',
            user: {
                id: 24,
                username: 'margaret'
            }, 
            post: {
                id: 3,
                title: 'Como hacer una api'
            },
            community: {
                id: 3,
                name: 'Programacion'
            }
        }
    ]
    STATUS: 200        

-----------------------------------------------------

ENDPOINT: /comments/
METODO: post
ACCION: crea un comentario y lo guarda
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

-----------------------------------------------------

ENDPOINT: /comments/:id
METODO: put
ACCION: edita un comentario
RESPONSE (ejemplo):
BODY (ejemplo):
    {
        body: 'Me parece un ejemplo muy bueno',
        userId: 2
    }
RESPONSE (ejemplo):
    {
        message: 'Comentario editado',
        postId: 1 // (del comentario editado)
    }
    STATUS: 200          

-----------------------------------------------------

ENDPOINT: /comments/:id
METODO: delete
ACCION: elimina un comentario
RESPONSE (ejemplo):
    {
        message: 'Comentario eliminado',
    }
    STATUS: 200              