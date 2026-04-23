const userData = {
  true: "Newton",
  1: "bepari",
};
const user1 = { name: "Newton" };
const user2 = { name: "Rohan" };
const user3 = { name: "Kailash" };
userData[user1] = "From Bangladesh";

console.log(userData);

console.log(userData["[object Object]"]);

console.log(userData["true"]); // object key convert key into string without symbol

console.log(userData["1"]);

console.log(Object.keys(userData));

console.log(typeof Object.keys(userData)[0]);

console.log(typeof Object.keys(userData)[1]);

const obj = new Map();

obj.set(user1, { country: "Bangladesh", old: 21 });
obj.set(user2, { country: "India", old: 22 });
obj.set(user3, { country: "Usa", old: 23 });
// console.log(obj.has(user1))

console.log(obj);

obj.forEach((value, key) => {
  value.hardWork =true
  return ((key.name = key.name + "Nxc"), (value.dream = true));
});
console.log(obj);

const objKey = obj.keys()

// for (let i of objKey){
//   console.log(i.name)
// }
console.log(obj.entries());

const bdPlayer = {
  opener:["Liton das","Soumiya sarker"],
  captain:["Shakib al hasan"]

}

const twoD = [["name","Newton"],["age","21" ]];
const threeD = [[["Bangladesh",""]],[["New zealand"]]]



console.log(new Map(threeD)) 