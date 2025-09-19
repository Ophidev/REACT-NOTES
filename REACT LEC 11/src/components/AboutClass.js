import {Component} from "react"; //destructuring import React from "react";
import Profile from "./Profile";

class AboutUs extends Component{

    constructor(props){

        super(props);

        this.state = {

            count1 : 0,
            count2 : 1
        }

      this.timeInterval =  setInterval(()=>{

            console.log("Print after each 1 second");
        },1000);
    }


    componentWillUnmount(){

        clearInterval(this.timeInterval); 
        //use to stop the timeInterval because this keyword is share among all the React life cycle method.
    }


    render(){

        const {count1,count2} = this.state; //destructuring the this.state
        return(
            <div className="About-us">
            <h1>This is ABout class</h1>
            <h2>About Props: {this.props.name}</h2>

            <h2>Count: {this.state.count1}</h2>
            <h2>Count2: {count2}</h2>

            <Profile/> {/*Or we can use <Outlet/> also because it is child of about*/}
            </div>
        );
    }
}

export default AboutUs;