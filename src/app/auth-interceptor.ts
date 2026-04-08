import { HttpInterceptorFn } from '@angular/common/http';
import { tap} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Interceptor Request:", req);
  return next(req).pipe(    //next(req)=>sends req to api,.pipe() handles response+error
    tap((res)=>{
      console.log("Interceptor Response:", res);
    }),
    catchError((error)=>{
      console.log("Interceptor Error:",error);
      alert("something went wrong");
      return throwError(()=>error);
    })
  );
};