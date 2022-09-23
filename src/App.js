import './App.css';
import {Component} from "react";
import {CardList} from "./component/card-list/cad-list.component";
import {SearchBox} from "./component/search-box/search-box.component";
import React from "react";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json()
        ).then(users => this.setState({monsters: users}))
    }


    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="Find your monster here!"
                handleChange={e => this.setState({searchField: e.target.value})}/>
                <CardList monstesrs={filteredMonsters}></CardList>
            </div>
        )

    }
}

export default App;
