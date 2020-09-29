const { request, response } = require("express");


const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
    tests: {
        test1 : {
            id: 100,
            date: Date.UTC(2019,3,1),
            name: "history",
            Grade: 100
        },
        test2 : {
            id: 101,
            date: Date.UTC(2019,5,6),
            name: "math",
            Grade: 90
        },
        test3 : {
            id: 102,
            date: Date.UTC(2019,12,1),
            name: "shit",
            Grade: 100
        }
    }
},
{
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
    tests: {
        test1 : {
            id: 100,
            date: Date.UTC(2019,3,1),
            name: "history",
            Grade: 60
        },
        test2 : {
            id: 101,
            date: Date.UTC(2019,5,6),
            name: "math",
            Grade: 70
        },
        test3 : {
            id: 102,
            date: Date.UTC(2019,12,1),
            name: "shit",
            Grade: 100
        }
    }
},
];

const getUser = (id) =>
{
    for (student of users)
    {
        if (id == student.id )
        {
            return student;
        }
    }
    return null;
} 

const getTests = (id) => 
{
    for (user of users)
    {
      
        if (id == user.id )
        {
            console.log(user.id);
            return user.tests;
        }
    }
    return null;
}


const router = app => {
    app.get('/', (request, response) => {
        response.send({message: 'Node.js and Express REST API :)'});
        
    });
    app.get('/users', (request, response) => {
        var id = request.query.id;
        let tests = getUser(id);
        if (tests)
        {
            response.send(tests);
        }
        else
        {
            response.send({error: `no student with id ${id}`});
        }
    });
    app.get('/users/:id/test', (request, response) => {
        var id = request.params.id;
        let tests = getTests(id);
        if (tests)
        {
            response.send(tests);
        }
        else
        {
            response.send({error: `no student with id ${id}`});
        }
        
    });
    app.post('/users/:id/test', (request, response) => {
        let id = request.body.id;
        console.log(id);
        
        response.sendStatus(200);
    });
    
}

module.exports = router;