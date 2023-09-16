function info(person) {
                
    return "Hello " + person.Name + "  is your number " + person.number;
  }





const obj = info({Name: "messi",number: "09196538542"})

const obj1 = info({Name: "ali",number: "09196538345"})
function search(name){

    if (name === "messi"){

        console.log("i found Him!")
    } else if (name === "ali"){

        console.log("i found Him!")

    } else {

        console.log("i did not find him")
    }
}

//search("noah")
//console.log(obj1,obj)
