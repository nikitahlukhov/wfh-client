import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ModalGameStartedComponent} from '../../../shared/components/modal-game-started/modal-game-started.component';
import {tap} from 'rxjs/operators';
import {Observable, ObservedValueOf} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameLeaveGuard implements CanDeactivate<Observable<any>> {

  constructor(private dialog: MatDialog) {
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
    const dialogRef = this.dialog.open(ModalGameStartedComponent, { panelClass: 'custom-dialog', maxWidth: '40%' });
    return dialogRef.afterClosed().pipe(
      tap(() => {
        console.log('close dialog');
      })
    );
  }

}