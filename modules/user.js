const Hebcal = require('hebcal');
// const libphonenumber = require('google-libphonenumber');
const { v4: uuidv4 } = require('uuid');


const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()

 



// const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

class user {
    constructor(name, email, phone, dateOfBirth) {
        this.name = name,
            this.email = email,
            this.phone = phone,
            this.dateOfBirth = dateOfBirth,
            this.id = uuidv4();

    }
    validate() {
        if (!(this.name && this.email && this.dateOfBirth))
            throw new Error("one or more the details are wrong");
        // if (this.phone.length != 10)
        //     throw new Error("wrong in number phone");
        // if (!this.email.includs('@'))
        //     throw new Error("invalid email");
        //   if (!phoneUtil.isValidNumberForRegion(phoneUtil.parse(this.phoneNumber, 'IL'), 'IL')) 
        //     throw new Error('The phone number is invalid');
        const phoneNumber = phoneUtil.parse(user.phone, 'IL');
        if (!phoneUtil.isValidNumberForRegion(phoneNumber, 'IL')); 
        return 'Invalid phone num';
          
    }

}
const users = [{nama:"joijgirjig",phone:"kodfihei",id:"123"}];

function createUser(name, email, phone, dateOfBirth) {
    let user1 = new user(name, email, phone, dateOfBirth);
    user1.validate();
    users.push(user1);
    return user1;
}

function getUsers(){
    console.log("gettttttttttttttt");
    return users;
}

    function updateUser(id, name, email, phone, dateOfBirth) {
    let user = getUserById(id);
    if (user) {
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.dateOfBirth = dateOfBirth;
        return user;
    }
    return null;
}

function deleteUser(id) {
    let index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById
};
