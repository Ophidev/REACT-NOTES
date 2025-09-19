//Arrow function in JS with "this" keyword

let NormalArrowFun = () =>{

    console.log("NormalArrowfun = ",this); 

}


NormalArrowFun();//output : window




let objec = {

    name : "Aditya",
    Roll : 3,

    ObjArrowfunc : () => {

        console.log("ObjectArrowfunc = ",this);

    },

    ObjArrowfunc1 : () => {

        console.log(this.name); //"Aditya"
    }
}

objec.ObjArrowfunc(); // output: window (Arrow function points to parent object).
objec.ObjArrowfunc.call(); // output: window
objec.ObjArrowfunc.call(objec);//output: window
objec.ObjArrowfunc.call(this);//output : window
objec.ObjArrowfunc.call(this.objec);//output: window
objec.ObjArrowfunc.call(this.name);//output : window

objec.ObjArrowfunc1();//undefined (because arrow function "this" keyword refers to the window(and window does note contain any name));
NormalArrowFun.call(objec);//output: window


let ObParent = {

    name: "Parent Aditya",
    
  obChild : {

    name : "Child Aditya",
    Roll : 3,

    ChArrowfunc : () => {

        console.log("ChArrowfunc = ",this);

    }
}

}

ObParent.obChild.ChArrowfunc();