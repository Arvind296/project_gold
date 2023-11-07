import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntSpinnerService {
  

  constructor() { }
  private isLoading = new BehaviorSubject<boolean>(false);

  show(): void {
    this.isLoading.next(true);
  }

  hide(): void {
    this.isLoading.next(false);
  }

  isLoading$ = this.isLoading.asObservable();
}
