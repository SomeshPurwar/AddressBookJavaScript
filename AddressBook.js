class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
}

// UC 1: Create a Contact
let contact1 = new Contact("Somesh", "Doe", "Mohalla Dhawakar Naka", "Mauranipur", "Uttar Pradesh", "284204", "8542877591", "somesh.purwar20@gmail.com");
console.log("UC 1 - Contact Created:\n", contact1);

