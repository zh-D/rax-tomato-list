import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
// @ts-ignore
import deleteIcon from '../image/delete.svg';

export default function Item({ item, onTodoChange, deleteTodo }) {
  return (
    <View className="todo-items">
      <View className="todo-items-group" onChange={() => onTodoChange(item)}>
        <label className={`todo-item${item.isFinish ? ' checked' : ''}`}>
          <input type="checkbox" className="todo-item-checkbox" value={item.name} checked={item.isFinish} />
          <text className="todo-item-text">{item.name}</text>
          <img id={item.id} src={deleteIcon} alt="delete" className="deleteButton" onClick={() => deleteTodo(item)} />
        </label>
      </View>
    </View>
  );
}
