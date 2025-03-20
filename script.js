// const name = "munim";

// localStorage.setItem("name", "munim");

// const myName = localStorage.getItem("name");
// console.log(myName)


const handleAddToStorage = () => {
    // const name = "MMunim";
    // localStorage.setItem("name", name)

    const person = {
        name: "MMunim",
        age: 23,
        friends:["nibir"]
    }

    // localStorage.setItem("name", person)
    // console.log(person.toString());

    const  convertedToString = JSON.stringify(person);
    // console.log(convertedToString)

    // localStorage.setItem("name", convertedToString);

    // const backToObject = JSON.parse(convertedToString);

    // console.log(backToObject.name)
} 

const data = localStorage.getItem("name");
// console.log(data)
const convertedData = JSON.parse(data);
console.log(convertedData.name)