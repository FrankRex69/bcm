const db = require('./db');
const helper = require('./helper');


exports.authUser = async(req, res) => {
    try {
        const result = await helper.checkAuthUser(req.body.username);
        if(result == 0){
            res.send("User and/or password not valid");
        } else {
            res.send("User password valid !!");
        }
        //res.status(200).json({result});
    } catch(err) {        
        res.sendStatus(err.message);
    }
};

exports.getUsers = async(req, res) => {    
    try {
        // verify basic auth credentials
        const base64Credentials =  req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');

        console.log("user e pass:" + username + password);
        // --------------
        const result = await helper.checkAuthUser(username);
        if(result == 0){
            res.send("User and/or password not valid");
        } else {
            db.query("SELECT * FROM users", (err, rows) => {
                if(err){
                    res.send('Query error: ' + err.sqlMessage);
                }else{
                    res.json(rows);
                }
            });         
        }
    } catch(error) {
        if(!req.headers.authorization){
            res.send("missing credential")   
        }
        res.send(error.message)
    }
};

exports.createUsers = async(req, res) => {
    
    try {
        // verify basic auth credentials
        const base64Credentials =  req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [usernameBasicAuth, password] = credentials.split(':');

        
        // --------------

        const result = await helper.checkAuthUser(usernameBasicAuth);
        if(result == 0){
            res.send("User and/or password not valid.");
        } else {
            if(await helper.checkMultiAuthUser(req.body.username) !== 0){                
                res.send("Credentials already in the database.");  
            } else {
                db.query("INSERT INTO users (username) VALUES ('"+ await helper.sanitize(req.body.username) +"')", (err, rows) => {
                    if(err){
                        res.send('Query error: ' + err.sqlMessage);            
                    }else{
                        res.send('Correct insert user with id: ' + rows.insertId);
                    }
                });
            }      
        }
    } catch(error) {        
        if(!req.headers.authorization){
            res.send("missing credential")   
        }
        res.send(error.message)
    }
};

