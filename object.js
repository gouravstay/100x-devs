// Object in js
// const user1 = {
//     firstName: "gaurav",
//     gender: "male"
// }

// console.log(user1["firstName"])


//array + objects
const allUsers = [{ 
    firstname: " gaurav",
    gender: "male",
}, {
       firstName: "miko",
       gender: "male",
       metadata: {
           age: 19,
           address: "in there"
        }
    },{
       firstName: "yea-miko",
       gender: "female",
    
}]

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
       console.log(allUsers[i]["firstName"])
    }
}