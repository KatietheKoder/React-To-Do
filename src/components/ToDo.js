import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       <div>
          <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
           <span>{ this.props.description }</span>
           <button
           onClick={this.props.deleteTodo} > delete </button>
         </li>
       </div>
     )
   }
 }
    handleOnClick = () => {
     this.props.store.dispatch({
       type: 'DELETE_TODO'
     });
   }

   render() <{

    const Todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} id={todo.id}store={this.props.store} />
    });

    return (

      <ul>
        {todos}
      </ul>
    );
  }
};



export default ToDo;
