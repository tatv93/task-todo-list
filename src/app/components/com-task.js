import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = "task ";
        if (this.props.data.done)
            classes += "done";
        return (
            <div className={classes}>
                <input type="checkbox" onChange={this.props.onChange} defaultChecked={this.props.data.done}/>
                <span>{this.props.data.title}</span>
            </div>
        );
    }
}

Task.propTypes = {
    data: React.PropTypes.object
};

export default Task;