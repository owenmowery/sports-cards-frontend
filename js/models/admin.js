class Admin {
    constructor(id, name, email, password_digest) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password_digest = password_digest;

        //console.log(this)
        //renderEdit and renderNew methods for authenticating the admin and 
    }

    static authenticateAdmin(event) {
        console.log(event)
    }
}