import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { Task } from '../../features/tasks/models/task.model';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  getTasksForCurrentUser(): Observable<Task[]> {
    const user = this.authService.getCurrentUser();
    if (user) {
      return this.firestore
        .collection<Task>('tasks', (ref) => ref.where('userId', '==', user.uid))
        .valueChanges({ idField: 'id' });
    } else {
      return of([]);
    }
  }

  addTask(task: Task): Promise<void> {
    const user = firebase.auth().currentUser;
    if (user) {
      const id = this.firestore.createId();
      return this.firestore
        .collection('tasks')
        .doc(id)
        .set({
          ...task,
          id,
          userId: user.uid,
        });
    } else {
      return Promise.reject('User not logged in');
    }
  }

  updateTask(task: Task): Promise<void> {
    const user = firebase.auth().currentUser;
    if (user) {
      return this.firestore.collection('tasks').doc(task.id).update({
        status: task.status,
        userId: user.uid,
      });
    } else {
      return Promise.reject('User not logged in');
    }
  }

  deleteTask(task: Task): Promise<void> {
    const user = firebase.auth().currentUser;
    if (user) {
      return this.firestore.collection('tasks').doc(task.id).delete();
    } else {
      return Promise.reject('User not logged in');
    }
  }
}
