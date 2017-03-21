import React, {Component} from 'react';
import TodoList from '../components/com-todo-list';
import TasksList from '../components/com-tasks-list';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="left_side">
                    <TodoList/>
                </div>
                <div className="right_side">
                    <TasksList/>
                </div>
            </div>
        );
    }
}

export default App;