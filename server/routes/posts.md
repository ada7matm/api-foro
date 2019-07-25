ENDPOINT: /posts/
METODO: post
ACCION: agrega un nuevo post
BODY (ejemplo):
    {
        id: 3,
        title: 'Como hacer una API?',
        body: 'blablablabla',
        communityId: 3,
        userId: 3
    }    
RESPONSE (ejemplo):
    {
        message: 'Post creado',
        id: 1 // (del post creado)
    }
    STATUS: 200  

-----------------------------------------------------

ENDPOINT: /posts/:id
METODO: get
ACCION: obtiene la info de un post por id
RESPONSE (ejemplo):
    {
        id: 33,
        title: 'Como hacer una API?',
        body: 'blablablabla ',
        user: {
            id: 23,
            username: 'ada'
        },
        community: {
            id: 45,
            name: 'programacion'
        }
    }    
    STATUS: 200    

ENDPOINT: /posts/
METODO: get
QUERY: community (id de la comunidad) o user (id del usuario)
ACCION: obtiene la lista de posts, si tiene los parametros de QUERY
community o user, obtiene los posts que pertenezcan a dicha comunidad o a dicho usuario
RESPONSE (ejemplo):
    [{
        id: 33,
        title: 'Como hacer una API?',
        body: 'blablablabla ',
        user: {
            id: 23,
            username: 'ada'
        },
        community: {
            id: 45,
            name: 'programacion'
        }
    },{
        id: 34,
        title: 'Como hacer un fetch?',
        body: 'blablablabla ',
        user: {
            id: 25,
            username: 'margaret'
        },
        community: {
            id: 45,
            name: 'programacion'
        }
    }]    
    STATUS: 200    

-----------------------------------------------------

ENDPOINT: /posts/:id
METODO: put
ACCION: actualiza la info de un post por id
BODY (ejemplo):
    {
        title: 'Como hacer una API?',
        body: 'blablablabla'
    }    
RESPONSE (ejemplo):
    {
        message: 'Post actualizado',
        id: 1 // (del post creado)
    }
    STATUS: 200  

-----------------------------------------------------

ENDPOINT: /posts/:id
METODO: delete
ACCION: elimina un post por id
RESPONSE (ejemplo):
    {
        message: 'Post eliminado'
    }
    STATUS: 200      