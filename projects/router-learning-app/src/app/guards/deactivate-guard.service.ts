import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';

export interface GuardDeactivation {
  canDeactivate(): Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<GuardDeactivation> {

  constructor() { }
  canDeactivate(component: GuardDeactivation) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
