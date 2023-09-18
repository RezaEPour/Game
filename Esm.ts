// makes a type that every contact should have
interface Person {
    name: string;
    number: string;
  
  }

let contacts: Person[] = []
// adds Contacts
function addContact(person: Person) {

    contacts.push(person)
                
  }

// adds some contacts
addContact({name: "messi",number: "09196538542"})

addContact({name: "ali",number: "09196538345"})

addContact({name: "sali",number: "091965383"})

// goes threw every contact and sees if the name that we have searched is in the contacts
function search(name){
    for (let i = 0; i < contacts.length; i++ ) {


     console.log(i)
     console.log(contacts[i].name)



    if (name === contacts[i].name ){

        console.log("i found Him!")
    } else {

        console.log("i did not find him")
    }

    }
    
}
// searches
search("messi")

