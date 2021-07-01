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
        Admin.all.forEach(admin => {
            if (admin.email === email && admin.password_digest === password) {
                console.log("You are an admin!")
                //do any hidden button rendering here
            };
        })
    }
}