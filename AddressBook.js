class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw "Invalid First Name";
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw "Invalid Last Name";
        if (!/^[a-zA-Z0-9 ]{4,}$/.test(address)) throw "Invalid Address";
        if (!/^[a-zA-Z]{4,}$/.test(city)) throw "Invalid City";
        if (!/^[a-zA-Z\w+\s?\w*]{4,}$/.test(state)) throw "Invalid State";
        if (!/^\d{5,6}$/.test(zip)) throw "Invalid Zip";
        if (!/^\d{10}$/.test(phone)) throw "Invalid Phone Number";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) throw "Invalid Email";

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
try {
    let contact1 = new Contact("Somesh", "Purwar", "Mauranipur", "Jhansi", "Uttar Pradesh", "284204", "1234567890", "somesh.purwar@email.com");
    console.log("UC 1 - Contact Created:\n", contact1);
} catch (error) {
    console.error("UC 1 - Error:", error);
}

// UC 2: Create an Address Book and add regex validation
let addressBook = new AddressBook();
console.log("UC 2 - Address Book Created:", addressBook);


