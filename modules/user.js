class user {
    constructor(name, email, phone, dateOfBirth) {
        this.name = name,
            this.email = email,
            this.phone = phone,
            this.dateOfBirth = dateOfBirth,
            this.id = users.length + 1

    }
    validate() {
        if (!(this.name && this.email && this.dateOfBirth))
            throw new Error("one or more the details are wrong");
        if (this.phone.length != 10)
            throw new Error("wrong in number phone");
        if (!this.email.includs('@'))
            throw new Error("invalid email");
    }

}
const users = [];

function createUser(name, email, phone, dateOfBirth) {
    let user = new user(name, email, phone, dateOfBirth);
    user.validate();
    users.push(user);
    return user;
}

function getUsers(){
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
