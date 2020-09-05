import React from 'react'
import Card from './Card'

import newsapp from '../assets/images/newsapp.png';
import project2 from '../assets/images/project2.png';
import weather from '../assets/images/weather.png';
import team from '../assets/images/team.png';
import burger from '../assets/images/burger.png';
import dayplanner from '../assets/images/dayplanner.png';

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'


class Project extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            items: [
        {
            id: 0,
            title: 'Project 1 - News App',
            subTitle: 'News inded to show different news sources in one place',
            imgSrc: newsapp,
            link: 'https://szaster.github.io/Your-Breaking-News/',
            selected: false
        },
        {
            id: 1,
            title: 'Weather Dashboard',
            subTitle: 'This app allow you to search by city name and displays current and future weather',
            imgSrc: weather,
            link: 'https://lisasosa.github.io/Weather-Dashboard/',
            selected: false
        },
        {
            id: 2,
            title: 'Project 2 - personal care app',
            subTitle: 'App intended for business owners to advertise their beauty business',
            imgSrc: project2,
            link: 'https://personal-care1.herokuapp.com/business',
            selected: false
        },
        {
            id: 3,
            title: 'Team Generator App',
            subTitle: 'App intended to help employers easily access their team members information',
            imgSrc: team,
            link: 'https://lisasosa.github.io/Team-Generator-App/',
            selected: false
        },
        {
            id: 4,
            title: 'Burger App',
            subTitle: 'Burger App allows the user enter enter a burger name and then select it',
            imgSrc: burger,
            link: 'https://sheltered-spire-84268.herokuapp.com/',
            selected: false
        },
        {
            id: 5,
            title: 'Work Day Scheduler',
            subTitle: 'Designed for the busy employee in mind so he/she can plan the day ahead',
            imgSrc: dayplanner,
            link: 'https://lisasosa.github.io/ElizabeS-Work-Day-Scheduler/',
            selected: false
        },
    ]
        }
    }
    

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
    
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
        if (item.id !== id) {
              item.selected = false;
        }
        });

        this.setState({
            items
        });
    }

    
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }
    render() {
        return(
            <Container fluid={true}>
              <Row className="justify-content-around">
              {this.makeItems(this.state.items)}
              </Row>
            </Container>
        )
    }
}


export default Project;