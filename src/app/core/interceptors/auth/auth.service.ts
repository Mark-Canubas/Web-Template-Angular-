import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session/session.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const session = inject(SessionService);
  const router = inject(Router);
  const token = session.get('token');

  if(token && !req.url.includes('/login')){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  return next(req).pipe(
    catchError((error) => {
      if(error.status === 401){
        session.remove('token');
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};
