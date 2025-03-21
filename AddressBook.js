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
        let isDuplicate = this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName);
        if (isDuplicate) {
            console.log("UC 7 - Duplicate Contact Not Allowed");
        } else {
            this.contacts.push(contact);
            console.log("UC 7 - Contact Added:", contact);
        }
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
    
    deleteContact(name) {
        let index = this.contacts.findIndex(c => c.firstName === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log("UC 5 - Contact Deleted:", name);
        } else {
            console.log("UC 5 - Contact Not Found");
        }
    }

    countContacts() {
        let count = this.contacts.reduce((total, contact) => total + 1, 0);
        console.log("UC 6 - Total Contacts:", count);
        return count;
    }

    searchByCityOrState(location) {
        let result = this.contacts.filter(c => c.city === location || c.state === location);
        console.log("UC 8 - Search Results for", location, ":", result);
        return result;
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

// UC 5: Find a contact by name and delete it
addressBook.deleteContact("Krishna");
console.log( addressBook.contacts);

// UC 6: Count the number of contacts in the Address Book
addressBook.countContacts();

// UC 7: Ensure no duplicate entries
try {
    let duplicateContact = new Contact("Krishna", "Purwar", "string", "string", "string", "02108", "1112223333", "string@email.com");
    addressBook.addContact(duplicateContact);
} catch (error) {
    console.error("UC 7 - Error:", error);
}

// UC 8: Search for a person by City or State
addressBook.searchByCityOrState("string");


