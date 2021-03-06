import { createElement } from 'rax';
import View from 'rax-view';
// @ts-ignore
import deleteIcon from '../image/delete.svg';
import { ItemProps } from './interface';

export default function Item({ item, onTodoChange, deleteTodo }: ItemProps) {
  return (
    <View className="todo-items">
      <View className="todo-items-group" onChange={() => onTodoChange(item)}>
        <label className={`todo-item${item.isFinish ? ' checked' : ''}`}>
          <input type="checkbox" className="todo-item-checkbox" value={item.name} checked={item.isFinish} />
          <text className="todo-item-text">{item.name}</text>
          <img id={item._id} src={deleteIcon} alt="delete" className="deleteButton" onClick={() => deleteTodo(item)} />
        </label>
      </View>
    </View>
  );
}
