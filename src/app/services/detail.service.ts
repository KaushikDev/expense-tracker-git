import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, Subscription } from 'rxjs';

interface EventDetails {
  client: string;
  orders: number;
  views: number;
}

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  ob = new BehaviorSubject<any>('');

}
