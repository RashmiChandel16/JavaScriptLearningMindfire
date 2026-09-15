/*Iterator is an object that allows us to access values one by one.
An iterator must have a next() method.
iterator.next() means give me the next value. 
.next() gets the next value from that iterator and returns an object containing:
{
    value: 10,
    done: false
}
-->An object is iterable if it has [Symbol.iterator]() method. For eg: Array,String,Map,Set
-->An object is an iterator if it has next()
-->Iterable → gives you an Iterator  (for eg: arr is iterable here)
-->Iterator → gives you values using next()
-->Iterator -> has next()
-->Iterable -> has Symbol.iterator
-->for...of uses the iterator protocol internally.
*/
let arr = [10, 20, 30];
let iterator = arr[Symbol.iterator](); //we are saying array to
console.log(iterator.next());   //{ value: 10, done: false }
console.log(iterator.next());   //{ value: 20, done: false }
console.log(iterator.next());   //{ value: 30, done: false }
console.log(iterator.next());   //{ value: undefined, done: true }

/* An iterator must provide a method: next() and next() must return an object containing:
{
    value: ...,
    done: ...
}
*/
let iterator = {
    next(){
        return {
            value: 10,
            done: false
        };
    }
};
console.log(iterator.next());  //{ value: 10, done: false }
//Note: this is an iterator bcz it has next()


//Lets create our own iterator
function createIterator(){
    let numbers = [10, 20 ,30];
    let index = 0;
    return {
        next(){
            if(index < numbers.length){
                return{
                    value: numbers[index++],
                    done: false
                };
            }    
            else{
                return{
                    value: undefined,
                    done: true
                };
            }
        }
    };
}

let iterator = createIterator();
console.log(iterator.next()); //{ value: 10, done: false }
console.log(iterator.next()); //{ value: 20, done: false }
console.log(iterator.next()); //{ value: 30, done: false }
console.log(iterator.next()); //{ value: undefined, done: true }
//Note: the above object is an iterator bcz it has next(), but it isn't necessarily Iterable bcz it doesn't have [Symbol.iterator]()


//Lets create our custom object both Iterable AND Iterator: (to do this we can add Symbol.iterator)
function createIterator(){
    let numbers = [10, 20, 30];
    let index = 0;
    return{
        next(){
            if(index < numbers.length){
                return {
                    value: numbers[index++],
                    done: false
                };
            }   
            else{
                return {
                    value: undefined,
                    done: true
                };
            }
        },

        [Symbol.iterator]() {
            return this;        //Note: [Symbol.iterator]() return this, bcz I am already an iterator, so return myself.
        }
    };
}

let iterator = createIterator();
for(let num of iterator){
    console.log(num);
}
/*Output
10
20
30
bcz now our object has both:
[Symbol.iterator]() → makes it Iterable
next() → makes it Iterator
*/


/*Strings are iterable, That's why this works:
for (let char of "ABC") {
    console.log(char);
}*/
let str = "ABC";
let iterator = str[Symbol.iterator]();
console.log(iterator.next());   //{ value: "A", done: false }
console.log(iterator.next());   //{ value: "B", done: false }
console.log(iterator.next());   //{ value: "C", done: false }
console.log(iterator.next());   //{ value: undefined, done: true }


//Iterator vs forEach()
//Iterable Protocol: An object must have: [Symbol.iterator]()
/*Iterator Protocol: The returned object must have: next() whichwhich returns:
{
    value: ...,
    done: ...
}
--> when we do arr[Symbol.iterator](), then array gives us an iterator*/






