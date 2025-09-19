import {Component} from "react";


class Profile extends Component{

    constructor (props){

        super(props);

        this.state={

            userInfo:{

                name:"",
                avatar_url:""
            }
        }

        console.log("child Constructor");
    };

  async componentDidMount(){

        const data = await fetch("https://api.github.com/users/AdityaBhatt37");
        const json = await data.json();
        this.setState({

            userInfo: json,
        });

        console.log("child compoundDidMount");

    }


    componentDidUpdate(){

        console.log("Child componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Child copmonentWillUnmount");
    }
    render(){
        console.log("child render()");
        return(

            <div className="Profile">

                <h1>This is profile for the ABout us section</h1>
                
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>Name:{this.state.userInfo.name}</h2>
                
            </div>
        );
    };

   

}

export default Profile;