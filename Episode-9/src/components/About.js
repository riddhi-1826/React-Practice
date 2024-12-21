// import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    componentDidMount(){
        console.log("Parent Mount")
    }
    render(){
        console.log("Parent render")
        return(
            <div>
                About us
                <UserClass name={"Koshi(Class)"} location={"Delhi"}/>
            </div>
            
        )
    }
}

// const About = () => {
//     return(
//         <div>About us
//             {/* <User name={"Deepak (Function)"}/> */}
//             <UserClass name={"Koshi(Class)"} location={"Delhi"}/>
//         </div>
        
//     )
// };
export default About;