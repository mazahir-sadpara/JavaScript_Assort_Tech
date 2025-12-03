// const tenderUser = new Object()

const tenderUser = {}
tenderUser.id = "123abc"
tenderUser.name = "Sharukh"
tenderUser.isLoggedIn = false

// console.log(tenderUser);

const otherUser = {
    email: "maz@gmail.com",
    fullName: {
        userFullName:{
            name: "Mazahir",
            age: 22
        }
    }
}

// console.log(otherUser.fullName.userFullName.name);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// console.log(tenderUser);
// console.log(Object.keys(tenderUser));
// console.log(Object.values(tenderUser));

const user = [
    {
        id: "12",
        name: "Qasim"
    },
    {
        id: "13",
        name: "Nasir"
    },
    {
        id: "14",
        name: "Suhail"
    }
]

// console.log(user[2].name)

// console.log(tenderUser.hasOwnProperty("isLoggedI"));

const course = {
    courseName: "JavaScript",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} =course
// console.log(courseInstructor);
console.log(instructor);

{
    "name": "mazahir",
    "age": 22,
    "gender": "male"
}

[
    {},
    {},
    {},
]





