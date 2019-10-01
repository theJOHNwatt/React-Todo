// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (<div className='clearcontainer'>
        <div className='todo-list'>
            {props.data.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}  
        </div> 
        
        <button className='clear-button' onClick={props.clearItems}>Clear Items</button>
        </div>
    );
};

export default TodoList;
