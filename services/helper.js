const db = require('./db');

exports.checkAuthUser = async(username) => {
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM users WHERE username = '"+ username +"'",  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

exports.checkMultiAuthUser = async(username) => {
    return new Promise((resolve, reject)=>{
        db.query("SELECT * FROM users WHERE username = '"+ username +"'",  (error, elements)=>{
            if(error){
                console.log('000');
                return reject(error);            }
            if(elements.length === 0) {
                console.log('111');
                return resolve(0);
            } else {
                console.log('222');
                console.log("ff" , elements);
                return resolve(elements[0].id);
            }
        });
    });
}