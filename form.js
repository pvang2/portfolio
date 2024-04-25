const contactForm = document.getElementById('contact-form');
const outputMessage = document.getElementById('outputMessage'); 

const contactCount = document.getElementById('contactNumber'); 
var OpenContactAccount = false;

//outputMessage.textContent = `Testginnnnng`;
// Soon we will add these people to a database.
class Person {
    constructor(businessName, firstName, lastName, city, state, zipCode, phone, emailAddress, briefMessage){
        this.businessName = businessName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = city;
        this.zipCode = zipCode;
        this.phone = phone;
        this.emailAddress = emailAddress;
        this.briefMessage = briefMessage;
    }
}

// Initialize some contacts
let contactList = [
    new Person('BassPro', 'Peter', 'Vang', 'Wausau', 'Wisconsin','54401', 715-555-4444, 'pvang2@students.ntc.edu'),
    new Person('None', 'Mai', 'Xiong', 'Wausau', 'Wisconsin','54401', 715-555-4444, 'mx2@students.ntc.edu'),
    new Person('Vision Impossible', 'Tom', 'Pruse', 'Wausau', 'Wisconsin','54401', 715-555-8888, 'tp@outlook.com')
]; 

UpdateCount();

contactForm.addEventListener('submit', function(event){
    event.preventDefault();
        let businessName = contactForm.elements['businessName'].value;
        let firstName = contactForm.elements['firstName'].value;
        let lastName = contactForm.elements['lastName'].value;
        let city = contactForm.elements['city'].value;
        let state = contactForm.elements['state'].value;
        let zipCode = contactForm.elements['zipcode'].value;
        let phone = contactForm.elements['phone'].value;
        let emailAddress = contactForm.elements['email'].value;
        let comment = contactForm.elements['commentBox'].value;
        
        var validate = ValidateEmail(emailAddress);
        if (validate === false){
            outputMessage.textContent = `It looks like that email "${emailAddress}" already exist. Please try again.`;
        }
        else{
            var validRegex = RegexCheck(firstName, lastName, city, state, zipCode, phone, emailAddress);
            if (validRegex == true) {
                
                let personAdded = new Person(businessName, firstName, lastName, city, state, zipCode, phone, emailAddress, comment); 
                contactList.push(personAdded);
                UpdateCount();
    
                outputMessage.textContent = `Thank you ${firstName} ${lastName} for leaving your information. I will try to reply in 48 hours or no more than 3 business days.`;
            }
        }
});

function ValidateEmail(email){
    console.log(email);
    for (let person of contactList){
        if (person.emailAddress === email){
            console.log(person.emailAddress);
            return false;
        }
    }
    return true;
}

function UpdateCount(){
    let contactCounter = 0;
    for (let contact of contactList) {
        contactCounter++;
    }
    contactCount.textContent = contactCounter; 
    
}


const RegexCheck = (firstname, lastName, city, state, zipCode, phone, email) => {
    
    var firstnameCheck = /^[a-zA-Z\s'.]+$/; 
    var lastnameCheck = /^[a-zA-Z\s']+$/; 
    var cityCheck = /^[a-zA-Z\s'~`0-9]+$/;
    var stateCheck = /^[a-zA-Z\s]+$/; 
    var zipcodeCheck = /^\d{5}$/; 
    var phoneCheck = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/; 
    var emailCheck = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/; 

    var isValid = true;

    if (!firstnameCheck.test(firstname)) {
        isValid = false;
        outputMessage.textContent = `The first name "${firstname}" is not valid. Please only include alphabets and periods are acceptable.`;
        return isValid;
    }
    if (!lastnameCheck.test(lastName)) {
        isValid = false;
        outputMessage.textContent = `The last name "${lastName}" is not valid. Please only include alphabets.`;
        return isValid;
    }
    if (!cityCheck.test(city)) {
        isValid = false;
        outputMessage.textContent = `The city name "${city}" is not valid. Please make sure it does not include any special characters, diacritics are acceptable.`;
        return isValid;
    }

    if (!stateCheck.test(state)) {
        isValid = false;
        outputMessage.textContent = `The state name "${state}" is not valid. Please make sure it does not include any numbers or special characters`;
        return isValid;
    }

    if (!zipcodeCheck.test(zipCode)) {
        isValid = false;
        outputMessage.textContent = `The zipcode ${zipCode} is not valid. Please make sure it is a five digit number.`;
        return isValid;
    }
    
    if (!phoneCheck.test(phone)) {
        isValid = false;
        outputMessage.textContent = `The phone number "${phone}" is not valid. Please make sure it does not include any letters and no more than 10 digits.`;
        return isValid;
    }
    
    if (!emailCheck.test(email) && email != '') {
        isValid = false;
        outputMessage.textContent = `The email "${email}" is not valid. Please make sure the format is correct. For example, example2@email.com;`;
        return isValid;
    }

    return isValid;
}