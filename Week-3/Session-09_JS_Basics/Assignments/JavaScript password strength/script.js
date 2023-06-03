// Your solution goes here 

function isStrongPassword(pwd){

    //If length of password is less than 8 then return false
    if(pwd.length < 8 ){
        return false;
    }

    //If password includes the string "password" then return false
    if(pwd.includes("password")){
        return false;
    }

    //If password doesn't have any uppercase letter then return false 
    if(!/[A-Z]/.test(pwd)){
        return false;
    }

    //Return true is all conditions passed.
    return true;
}

console.log(isStrongPassword("Qwerty"));
console.log(isStrongPassword("passwordQwerty"));
console.log(isStrongPassword("qwerty123"));
console.log(isStrongPassword("Qwerty123"));