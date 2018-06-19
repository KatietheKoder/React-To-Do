import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       <li>
       <div>{ this.props.description }</div>
       <div>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         <button
   onClick={this.props.deleteTodo}
       > delete</button>
       </div>
       </li>

     );
   }
 }

 export default ToDo;
