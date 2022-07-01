import {generateTask} from '../mock/task.js';

export default class TasksModel {
  tasks = Array.from({length: 20}, generateTask);

  getTasks = () => this.tasks;
}
