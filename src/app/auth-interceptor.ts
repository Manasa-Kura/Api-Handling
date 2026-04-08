import { HttpInterceptorFn } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';
import { inject } from '@angular/core';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // GET TOKEN
  const token = localStorage.getItem('token');
  const loader = inject(LoaderService);
  let modifiedReq = req;
  // ADD TOKEN
  if (token) {
    modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  console.log("Interceptor Request:", modifiedReq);
    // SHOW LOADER
  loader.show();
  return next(modifiedReq).pipe(    //next(req)=>sends req to api,.pipe() handles response+error
    // RESPONSE HANDLING
    tap((res) => {
      console.log("Interceptor Response:", res);
    }),
    //ERROR HANDLING
    catchError((error) => {
      console.log("Interceptor Error:", error);
      alert("Something went wrong!");
      return throwError(() => error);
    }),
    finalize(() => {
      loader.hide();
    })
  );
};