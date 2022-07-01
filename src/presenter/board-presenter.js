import BoardView from '../view/board-view';
import SortView from '../view/sort-view';
import TaskListView from '../view/task-list-view';
import TaskEditView from '../view/task-edit-view';
import TaskView from '../view/task-view';
import LoadMoreButtonView from '../view/load-more-button-view';
import {render} from '../render';

export default class BoardPresenter {
  boardComponent = new BoardView();
  taskListComponent = new TaskListView();

  init = (boardContainer, tasksModel) => {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
    this.boardTasks = [...this.tasksModel.getTasks()];

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());
    render(new TaskEditView(this.boardTasks[0]), this.taskListComponent.getElement());

    for(let i=1; i < this.boardTasks.length; i++) {
      render(new TaskView(this.boardTasks[i]), this.taskListComponent.getElement());
    }

    render(new LoadMoreButtonView(), this.boardComponent.getElement());
  };
}
