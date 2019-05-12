var person = new Object();

person["firstname"] = "Robert";
person["lasttname"] = "Elias";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]); 

console.log(person.firstname);
console.log(person.lasttname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "Orange";
person.address.state = "CA";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);

