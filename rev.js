let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function showFirstContact() {
    if (contacts.length > 0) {
        console.log("First Contact:");
        console.log(contacts[0]);
    } else {
        console.log("No contacts available.");
    }
}

function showLastContact() {
    if (contacts.length > 0) {
        console.log("Last Contact:");
        console.log(contacts[contacts.length - 1]);
    } else {
        console.log("No contacts available.");
    }
}

function addNewContact(name, phone, email) {
    if (name && phone && email) {
        let newContact = {
            name: name,
            phone: phone,
            email: email
        };
        contacts.push(newContact);
        console.log("Contact added successfully!");
    } else {
        console.log("Please enter all necessary data (name, phone, and email) to add a new contact.");
    }
}

// Example usage:
showFirstContact();
showLastContact();
addNewContact("John Doe", "123-456-7890", "john.doe@example.com");
