//Function and Arrow Function in REACT 

/*->When we make the function with the "function" keyword and we use "this" keyword then
    the "this" keyword always points to the current object.
    
    ->And when we make the Arrow function then "this" keyword points to the parent object always.*/

//Function with "this" keyword in Java Script


function fun(){

    console.log("fun = ",this); //output window ("this" keyword point to current object which is  global object "window");
    fun2();
  

    function fun2(){

        console.log("fun2 =",this); 

        function fun3(){

            console.log( "fun3 = ",this);

           
        }

        fun3();
    }
}


fun();



let object = {

    name: "Aditya",

    roll: "1",

    func: function(){

        console.log(this); //here "this" keyword points to the current object which is "object".
    }
}

let object2 = {

    name: "priyanshu",
    roll: 30
}


object.func();// object 


object.func.call(object);// object

object.func.call();// window (because we are console.log "this" inside our func function which are called within the call method).

object.func.call(this);// window (because we are calling this inside the call method which refers to the window object).

object.func.call(object2); // object2
