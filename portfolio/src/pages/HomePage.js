import React from 'react'

import Header  from '../components/Header'
import Carousel  from '../components/Project'

function HomePage(props) {
 return (
     <div>
     <Header title={props.title} subTitle={props.subtitle} text={props.text}/>
     <Carousel />
     </div>
 )
}

export default HomePage;