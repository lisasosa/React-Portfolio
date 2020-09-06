import React from 'react'

import Header  from '../components/Header'
import Project  from '../components/Project'

function HomePage(props) {
 return (
     <div>
     <Header title={props.title} subTitle={props.subtitle} text={props.text}/>
     <Project />
     </div>
 )
}

export default HomePage;