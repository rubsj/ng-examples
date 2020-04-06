import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
@Injectable({
    providedIn: 'root',
})
export class UIService {
    loadingStateChanged = new Subject<boolean>();
    public loading$: Observable<boolean>;
    constructor(private snackBar: MatSnackBar) {
        this.loading$ = this.loadingStateChanged.asObservable();
    }

    showSnackBar(message: string, action: string, duration: number) {
        this.snackBar.open(message, action, { duration });
    }
}
