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
    addContact(contact) {
        this.contacts.push(contact);
    }

    editContact(name, updatedDetails) {
        let contact = this.contacts.find(c => c.firstName === name);
        if (contact) {
            Object.assign(contact, updatedDetails);
            console.log("UC 4 - Contact Edited:", contact);
        } else {
            console.log("UC 4 - Contact Not Found");
        }
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

// UC 3: Add new Contacts to Address Book
try {
    let contact2 = new Contact("Krishna", "Purwar", "string", "string", "string", "90001", "9876543210", "string@email.com");
    addressBook.addContact(contact2);
    console.log("UC 3 - Contact Added:\n", addressBook.contacts);
} catch (error) {
    console.error("UC 3 - Error:", error);
}

// UC 4: Find existing contact by name and edit it
addressBook.editContact("Krishna", { phone: "9998887776", city: "Mauranipur" });
console.log("UC 4 - Contact Updated:\n", addressBook.contacts);

