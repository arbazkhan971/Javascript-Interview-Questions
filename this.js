// this
// this keyword in js refers to the object it belongs to.

// case 1 : when alone , it refers to the global object (window in browser, global in node)
console.log(this);
// case 2 : when inside a regular function, it refers to the global object
function a(){
    console.log(this)
}
// case 3 : when inside method, it refers to the parent object

const obj = {
    title : "this keyword in js",
    topic : "JavaScript",
    printDesc : function (){
        console.log("this will print parent object",this);
        function tricky(){
            console.log("this will print global object inside tricky function",this);
        } 
        tricky();
    }
}