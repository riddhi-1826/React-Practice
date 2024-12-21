import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(props)
        // this.state = {
        //     count:0,
        //     count1:2
        // }
        // console.log("Constructor")
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
    }
    render(){
        console.log("Render")
        return(
            <div className="user-card">
                {/* <h1>Count: {this.state.count}</h1> */}
                {/* <h1>Count: {this.state.count1}</h1>
                <button onClick={() =>{
                    {
                        this.setState({
                            count:this.state.count+1,
                        });
                    }
                }}>Increment Count Variable</button> */}
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
            </div>
        )
    }
}
export default UserClass;