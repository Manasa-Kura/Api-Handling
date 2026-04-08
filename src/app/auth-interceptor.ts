import { HttpInterceptorFn } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // GET TOKEN
  const token = localStorage.getItem('token');
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
    })
  );
};