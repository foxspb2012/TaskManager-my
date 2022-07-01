import {render} from './render';
import NewTaskButtonView from './view/new-task-button-view';
import FilterView from './view/filter-view';
import BoardPresenter from './presenter/board-presenter';
import TasksModel from './model/tasks-model.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

const taskModel = new TasksModel();
const boardPresenter = new BoardPresenter();

render(new NewTaskButtonView(), siteHeaderElement);
render(new FilterView(), siteMainElement);

boardPresenter.init(siteMainElement, taskModel);
