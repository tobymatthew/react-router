import React from 'react'
import {useLocation} from 'react-router-dom'

function PageNotFound() {
    const location= useLocation();
    return (
        <div>
           {location.pathname} not found this guy 
        </div>
    )
}

export default PageNotFound
