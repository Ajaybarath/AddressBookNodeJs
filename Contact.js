class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get address(){
        return this._address;
    }
    get city(){
        return this._city;
    }
    get state(){
        return this._state;
    }
    get zip(){
        return this._zip;
    }
    get phone(){
        return this._phone;
    }
    get email(){
        return this._email;
    }

    set firstName(firstName) {
        let nameRegex = RegExp('[A-Z][a-zA-Z]{3,}');
        if (nameRegex.test(firstName)) {
            this._firstName = firstName
        }
        else throw "Enter valid first name"
    }

    set lastName(lastName) {
        let nameRegex = RegExp('[A-Z][a-zA-Z]{3,}');
        if (nameRegex.test(lastName)) {
            this._lastName = lastName
        }
        else throw "Enter valid lastName"
    }

    set city(city) {
        let cityRegex = RegExp('[A-Z][a-zA-Z]{4,}');
        if (cityRegex.test(city)) {
            this._city = city
        }
        else throw "Enter valid city"
    }

    set address(address) {
        let addressRegex = RegExp('[A-Z][a-zA-Z]{4,}');
        if (addressRegex.test(address)) {
            this._address = address
        }
        else throw "Enter valid address"
    }

    set state(state) {
        let stateRegex = RegExp('[A-Z][a-zA-Z]{4,}');
        if (stateRegex.test(state)) {
            this._state = state
        }
        else throw "Enter valid state"
    }

    set zip(zip) {
        let zipRegex = RegExp('[1-9][0-9]{5}');
        if (zipRegex.test(zip)) {
            this._zip = zip
        }
        else throw "Enter valid zip"
    }

    set phone(phone) {
        let phoneRegex = RegExp('([9][1][ ])[0-9]{10}');
        if (phoneRegex.test(phone)) {
            this._phone = phone
        }
        else throw "Enter valid phone"
    }
    
    set email(email) {
        let emailRegex = RegExp('([a][b][c][.]?){1}([a-zA-Z]{3,})?[@]([b][l][.][c][o][.]?[i]?[n]?)');
        if (emailRegex.test(email)) {
            this._email = email
        }
        else throw "Enter valid email"
    }

    toString() {
        return "firstName= " + this.firstName + ", lastName= " + this.lastName + ", address= " + this.address + ", city= " + this.city + ", state= " + this.state + ", zip= " + this.zip + ", phone= " + this.phone + ", email= " + this.email;
    }
}

try {
    let contact = new Contact("Ajay", "Barath", "Velayuthampalayam", "Karur", "Tamil Nadu", 639117, "91 9965775758", "abc.sfdg@bl.co.in")
    console.log(contact.toString())
}
catch (e) {
    console.error(e)
}