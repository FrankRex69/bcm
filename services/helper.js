const db = require('./db');
const validator = require('validator');
const sanitizer = require('sanitizer');

exports.checkTable = async() => {
    return new Promise((resolve, reject)=>{ 
        db.query("SELECT * FROM users",  async (error, elements)=>{
            if(error){
                await createInitTable();
                await insertInitAdmin();
                return resolve("create init table and insert admin account");
            }
            return resolve("init table was present");
        });
    }); 
}

const createInitTable = async() => {    
    let queryTable = "CREATE TABLE users ";
    queryTable = queryTable + "(id INT(11) NOT NULL auto_increment ,";
    queryTable = queryTable + "username VARCHAR(50) NOT NULL ,";
    queryTable = queryTable + "email VARCHAR(50) NOT NULL ,";
    queryTable = queryTable + "password VARCHAR(50) NOT NULL ,";
    queryTable = queryTable + "datainsert DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,"
    queryTable = queryTable + "PRIMARY KEY (id),"
    queryTable = queryTable + "UNIQUE idx_name_unique (username(50)) )"
    queryTable = queryTable + "engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;"

    return new Promise((resolve, reject)=>{ 
        db.query(queryTable,  (error, elements)=>{
            if(error){                
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

const insertInitAdmin = async() => {    
    let queryTable = "INSERT INTO users (username,password,email) VALUES ('admin','pwd','qwerty@asdfg.com')";
    return new Promise((resolve, reject)=>{ 
        db.query(queryTable,  (error, elements)=>{
            if(error){                
                return reject(error);
            }           
            return resolve(elements);
        });
    });
}

exports.checkAuthUser = async(username, password) => {
    return new Promise((resolve, reject)=>{ 
        db.query("SELECT * FROM users WHERE username = '"+ username +"' AND password = '"+ password +"'",  (error, elements)=>{
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
                return reject(error);
            }
            if(elements.length === 0) {
                return resolve(0);
            } else {                
                return resolve(elements[0].id);
            }
        });
    });
}

exports.sanitize = async(unsanitized_element) => {    
    let clean = sanitizer.sanitize(unsanitized_element, function(str) {
     return str;
    });    
    clean = clean.replace(/<(?:.|\n)*?>/gm, "");
    clean = clean.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/ig, "\n");
    return clean.trim();
}

exports.validate = async(unvalidate_element) => { 
    return validator.isEmail(unvalidate_element);
}
