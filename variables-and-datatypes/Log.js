let Name = "Rashmi";
let age = 20;
console.log("my name and age are:", Name, age); //using ,
console.log("Age:", age, "Name:", Name);
console.log("my name and age are: "+ Name + " " + age); //using +
console.log("Age " + age + " Name "+Name);
console.log(Name, age);
console.log(`my name is ${Name} and my age is ${age}`); //using Template Literals or String Interpolation
console.log(`my Name and age are, Name, age`); //without ${} placeholder, it acts like normal string

//string is immutable so original string will not change
let str1="rashmi";
let str2="singh";
console.log(str1+" "+str2); //using +
console.log(str1.concat(str2,"chandel")); //using concat method

//adding number and string
//if + encounters a string, it performs concatenation from that point onward
//+ => addition or concatenation
//-,*,/ => numeric operation, strings ko numbers me convert krte h
//left se right chalo agar same priority vale operator h
//+ and -same priority vale h
//*, % and / same priority vale h
//jb same priority vale na ho to bodmas lgao
console.log(10+'10');
console.log(typeof(5+6+"7"+8+9));  
console.log(typeof(10-"20"));
console.log(typeof("10"-20+30));
console.log(10+"20"-5);
console.log(10-"20"+5);

console.log("Hello"); //to print normal information
console.error("Error"); //error display krne ke liye
console.warn("Warning"); //warning msg display krne k liye
console.info("Information"); //koi information display k liye
console.table([1, 2, 3]); //array or object ko table format me display krta h
console.clear(); //to clear msgs displayed in browser console
console.assert(5>6, "condition is false");//condition false hone pr msg/error diplay krta h
console.assert(6>5, "condition is true");//this will not print annything bcz cndition is true here.