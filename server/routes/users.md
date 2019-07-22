ENDPOINT: /users/login
METODO: post
BODY (ejemplo): 
    {
        username: 'ada',
        password: 'adaitw'
    }        
ACCION: valida los datos enviados con los usuarios existentes y comprueba si coinciden username y password   
RESPONSE (ejemplo)
    Si datos son correctos:
    {
        id: 33
    }    
    STATUS: 200
    Sino
    STATUS: 400

-----------------------------------------------------

ENDPOINT: /users/register
METODO: post
ACCION: crea un usuario (si no hay ninguno que tenga ese username) y lo guarda
BODY (ejemplo): 
    {
        username: 'ada',
        password: 'adaitw'
    }   
RESPONSE (ejemplo):
    Si datos son correctos:
    {
        id: 33
    }    
    STATUS: 200
    Sino
    STATUS: 400

-----------------------------------------------------

ENDPOINT: /users/:id
METODO: get
ACCION: obtiene la info de un usuario por id
RESPONSE (ejemplo):
    {
        id: 33,
        username: 'ada',
        questions: 31,
        answers: 23
    }    
    STATUS: 200
