const name = "Hey, I am ayon !";
console.log(name);
console.log("Shortest Way We Can Write A Function ->");
const toUpper = () => {
  const upperedName = name.toUpperCase();
  //console.log(upperedName);
  return upperedName;
};
const returned = toUpper();
console.log(toUpper);
console.log(returned);

console.log("Add Variable Data in String ->");
const myName = "Ayon";
console.log(typeof myName);
console.log(`Hello, It's me ${myName} & I'm a Web Developer`);

console.log("array push/pop/shift/unshift/remove->");
const arr1 = ["1", "2", "3", "4"];
arr1.push("5");
console.log(arr1);
arr1.pop();
arr1.shift(); //1 gone
arr1.unshift("beginning");
console.log(arr1);
console.log(arr1.indexOf("2"));

console.log("create an object ->");

const user = {
  name: "Arif",
  age: 25,
  married: false,
  skills: ["php", "c", "laravel", "codeignighter", "vueJS"],
  // };
  //console.log(this);//window object // also holding functions

  sayname: function() {
    console.log(this.name);
    console.log("Some Text");
  }
};

user.sayname();
console.log("for loop");
const numberss = ["1", "2", "3", "4", "5"];

for (number of numberss) {
  console.log(`number is ${number}`);
  if (number === "4") {
    console.log("4 found");
    break;
  }
}

console.log("while loop");
let loading = 0;

while (loading < 2) {
  console.log("website still loading");
  loading++;
}

const text = document.querySelector(".title");
const btn = document.querySelector(".changeColor");

//text.style.color = "red";
//text.classList.add("change");
//text.classList.remove("change");

btn.addEventListener("click", function() {
  text.classList.toggle("change");
});

const userList2 = document.querySelectorAll(".nameList li");
const userList = document.querySelector(".nameList");
const listInput = document.querySelector(".listInput");
const addListBtn = document.querySelector(".addToListBtn");
//console.log(userList);

for (element of userList2) {
  element.addEventListener("click", function() {
    console.log(this);
    this.style.color = "red";
  });
}

addListBtn.addEventListener("click", function() {
  const newLi = document.createElement("LI");
  const liData = document.createTextNode(listInput.value);
  newLi.appendChild(liData);
  userList.appendChild(newLi);
  listInput.value = "";
});
