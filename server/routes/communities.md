ENDPOINT: /communities/
METODO: get
ACCION: obtiene listado de todas las comunidades
RESPONSE (ejemplo):
    [
        {
            id: 1,
            name: 'programacion'
        },
        {
            id: 2,
            name: 'memes'
        }
    ]    
    STATUS: 200    

-----------------------------------------------------

ENDPOINT: /communities/:id
METODO: get
ACCION: obtiene informacion de una comunidad
RESPONSE (ejemplo):
    {
        id: 1,
        name: 'programacion',
        description: 'Comunidad sobre programacion'
    }
    STATUS: 200   

-----------------------------------------------------

ENDPOINT: /communities/
METODO: post
ACCION: crea una comunidad
BODY (ejemplo):
    {
        name: 'programacion',
        description: 'Comunidad sobre programacion'
    }
RESPONSE (ejemplo):
    {
        message: 'Comunidad agregada',
        id: 1 // (de la comunidad creada)
    }
    STATUS: 200      
