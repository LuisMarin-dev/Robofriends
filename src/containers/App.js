import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }
    
    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        // This if statement porpuse is to show a loading screen if the user fetching takes too long to load the
        // robots on the page. NOTICE how the 'robots' are used in the if statement, without the 'this.state.' it would just return a "no-undef" error about it.
        if(robots.length === 0){
            return <h1 className="tc">Loading</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className="f2">Robofriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry> 
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        };
    }
};

export default App;