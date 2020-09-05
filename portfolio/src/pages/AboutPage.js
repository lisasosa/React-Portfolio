import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'

function AboutPage(props) {
 return (
     <div>
        <Header title={props.title} />
        <Content>
        <p>BSET University of Houston Down Town</p>
        <p>Current Student at UT-Austin Coding BootCamp</p>
        <p>Business Systems Analyst at Wex Inc</p>

        <h4>Quick learner</h4>

        <p>Enthusiastic and always looking out to learn new things. Not a very risk taker person by DNA but when
          it
          comes
          to education and learning, I’m always willing to take risks and make investments.</p>
        <h4>Excellent Collaborator and results oriented</h4>
        <p>Always willing to support and help other people when they need me as well as collaborate with them to
          improve things.
        </p>
        <p>I have successfully collaborated with multiple teams including Operations, Engineering, Software
          Developers,
          Risk, and Product
          teams to either build a new project or improve an existing one.</p>
        </Content>
     </div>
 )
}

export default AboutPage;