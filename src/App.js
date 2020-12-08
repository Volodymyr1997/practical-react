import React, {Component} from 'react';
import NewCreat from "../public/NewCreat/NewCreat";
class App extends Component {
    users = [
        {name:'victor', age:23, status:true},
        {name:'koly', age:23, status:true},
        {name:'karyna', age:23, status:true},
        {name:'Rostyk', age:23, status:true},
        {name:'Vova', age:23, status:true},
        {name:'Dima', age:23, status:true},
    ];
    render() {
        return (
            <div>
                <NewCreat user={2}/>
            </div>
        );
    }
}

export default App;