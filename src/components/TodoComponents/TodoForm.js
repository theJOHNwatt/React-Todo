import React from 'react';


class TodoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newItem: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handlesubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
    };

    render() {
        return (
            <form onSubmit={this.handlesubmit}>
                <input
                    type='text'
                    value={this.state.newItem}
                    name='item'
                    onChange={this.handleChanges}
                />
                <button>Add Todo Item</button>
            </form>
        );
    }

}

export default TodoForm;