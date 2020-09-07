import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircle, MdCheckBox } from 'react-icons/md';
import './TodoListItem.scss';
import cn  from 'classnames';

const TodoListItem = ({todo}) => {
    console.log(todo);
    const {text,checked} = todo;
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})}>
                {checked? <MdCheckBox/> :  <MdCheckBoxOutlineBlank/>}                
                <div className="text">{text}</div>
            </div>

            <div className="remove">
                <MdRemoveCircle/>
            </div>
            
        </div>
    );
};

export default TodoListItem;