import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonCard from "./PersonCard.js"
import { Container, Row } from 'reactstrap';
export default function PeopleList() {
    const [people, setPerson] = useState([]);
    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(res => {
                console.log('Star wars People log: ', res.data.results);
                setPerson(res.data.results);
            })
            .catch(err => {
                console.log('Bummer, the Star Wars data was not returned', err);
            })
    }, []);
    return (
        <Container>
            <Row>
                {people.map(person => {
                    return (
                        <PersonCard name={person.name} species={person.species[0]} films={person.films} vehicles={person.vehicles} key={person.url} />
                    );
                })}
            </Row>
        </Container>
    )
}