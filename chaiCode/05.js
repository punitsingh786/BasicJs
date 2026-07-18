//note--
//Primitive Types:(STACK)
// 1. Stored in stack.
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies don't affect the original.

// Reference Types:(HEAP)
// 1. Stored in heap; accessed via references (stored in stack).
// 2. Changing the value through another reference affects the original.


let userOne={
    email:"punit@gmail.com",
    upi:"pu@ybl"
};
let userTwo=userOne;
userTwo.email="chaicode@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
