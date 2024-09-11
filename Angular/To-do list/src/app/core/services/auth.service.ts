import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app'; // Use compat if needed, otherwise v9
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  isLoggedIn(): Observable<boolean> {
    return this.auth.authState.pipe(map((user) => !!user));
  }
  register(email: string, password: string, name: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return this.firestore.collection('users').doc(user?.uid).set({
          uid: user?.uid,
          email: email,
          name: name,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      });
  }

  login(email: string, password: string): Promise<any> {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return this.firestore
          .collection('users')
          .doc(user?.uid)
          .get()
          .toPromise()
          .then((doc) => {
            if (doc?.exists) {
              // User data found
              return doc.data();
            } else {
              throw new Error('No user data found');
            }
          });
      });
  }

  logout(): Observable<void> {
    return from(this.auth.signOut());
  }

  forgotPassword(email: string): Observable<void> {
    return from(this.auth.sendPasswordResetEmail(email));
  }

  getUser(): Observable<any> {
    return this.auth.authState.pipe(
      map((user) => {
        if (user) {
          return this.firestore
            .collection('users')
            .doc(user.uid)
            .valueChanges();
        } else {
          return null;
        }
      })
    );
  }

  getCurrentUser(): firebase.User | null {
    return firebase.auth().currentUser;
  }
}

type login = {
  email: string;
  password: string;
};
