import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskService } from '../../../../core/services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  runningTasks: Task[] = [];
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];
  newTaskTitle: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasksForCurrentUser().subscribe((tasks) => {
      this.runningTasks = tasks.filter((task) => task.status === 'running');
      this.pendingTasks = tasks.filter((task) => task.status === 'pending');
      this.completedTasks = tasks.filter((task) => task.status === 'done');
    });
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = { title: this.newTaskTitle, status: 'pending' };
      this.taskService.addTask(newTask).then(() => {
        this.newTaskTitle = '';
        this.pendingTasks.push(newTask);
      });
    }
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).then(() => {
      const index = this.pendingTasks.indexOf(task);
      if (index > -1) {
        this.pendingTasks.splice(index, 1);
      }
    });
  }

  updateTaskStatus(
    task: Task,
    newStatus: 'running' | 'pending' | 'done'
  ): void {
    task.status = newStatus;
    this.taskService
      .updateTask(task)
      .then(() => {
        if (newStatus === 'running') {
          this.runningTasks.push(task);
          const index = this.pendingTasks.indexOf(task);
          if (index > -1) {
            this.pendingTasks.splice(index, 1);
          }
        } else if (newStatus === 'pending') {
          this.pendingTasks.push(task);
          const index = this.runningTasks.indexOf(task);
          if (index > -1) {
            this.runningTasks.splice(index, 1);
          }
        } else if (newStatus === 'done') {
          this.completedTasks.push(task);
          const index = this.pendingTasks.indexOf(task);
          if (index > -1) {
            this.pendingTasks.splice(index, 1);
          }
        }
      })
      .catch((error) => {
        console.error('Failed to update task status:', error);
      });
  }

  drop(event: CdkDragDrop<Task[]>): void {
    const task = event.item.data;
    console.log('Dragged Task:', task);

    if (!task) {
      console.error('Task is undefined');
      return;
    }

    const previousStatus = task.status;
    console.log('Previous Status:', previousStatus);

    let newStatus: string = '';
    if (event.container.id === 'pendingList') {
      newStatus = 'pending';
    } else if (event.container.id === 'runningList') {
      newStatus = 'running';
    } else if (event.container.id === 'doneList') {
      newStatus = 'done';
    }
    console.log('New Status:', newStatus);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (previousStatus !== newStatus) {
        task.status = newStatus;

        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );

        this.taskService
          .updateTask(task)
          .then(() => {
            console.log('Task status updated successfully in the backend');
          })
          .catch((error) => {
            console.error('Failed to update task status:', error);
            task.status = previousStatus;
          });
      }
    }
  }
}
