import React, { Component } from 'react'
import Cards from './Cards';


export default class List extends Component {
    constructor(){
        super();
        this.state = {
            peliculas: []
        }
    }

    async componentDidMount(){
        const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'
        const resp = await fetch(url);
        const data = await resp.json();
        const {results} = data;
        console.log(results);
        this.setState({peliculas:results})
        console.log(this.state.peliculas)


        
    }

    render() {
        return (
            <div>
                <h1>Lista</h1>
                {
                    this.state.peliculas.map((movie, index) => (
                       <Cards
                       key={movie.id}
                       movies={movie}/>
                    ))
                }
            </div>
        )
    }
}
