const db = require('./db');
const validator = require('validator');
const sanitizer = require('sanitizer');

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
