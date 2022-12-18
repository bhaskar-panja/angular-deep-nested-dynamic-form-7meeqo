import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  selectedFormControl$ = new BehaviorSubject<any>('');
  constructor() {}
}
