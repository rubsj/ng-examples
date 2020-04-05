import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class UIService {
    loadingStateChanged = new Subject<boolean>();
    public loading$: Observable<boolean>;
    constructor() {
        this.loading$ = this.loadingStateChanged.asObservable();
    }
}
