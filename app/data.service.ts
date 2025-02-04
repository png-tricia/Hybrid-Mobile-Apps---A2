import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  /* BehaviourSubject for managing the sending and updating of members and messages */
  member = new BehaviorSubject<any>('');
  message = new BehaviorSubject<any>('');

  asObserver = this.message.asObservable();
  asMember = this.member.asObservable();

  setMessage(msg: any) {
    this.message.next(msg);
  }

  setMember(mbr: any) {
    this.member.next(mbr);
  }
}
