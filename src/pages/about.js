import React from "react";
import {useHistory} from 'react-router-dom'

const About = ()=>{
    const history= useHistory();
    return <h1>Hello
        <span><button onClick={()=>{history.push('/project')}}>go to project</button></span>
    </h1>
}

export default About;