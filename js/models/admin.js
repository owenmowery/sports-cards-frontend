class Admin {

    //hold all admins
    static all = [];

    constructor(id, name, email, password_digest) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password_digest = password_digest;
    }

    static authenticateAdmin(email, password) {
        console.log(email)
        console.log(password)
    }
}