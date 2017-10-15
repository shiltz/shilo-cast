import {Injectable} from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import {ObserrvableStoreService} from './obserrvable-store.service'


@Injectable()
export class HttpLoadingInterceptorService implements HttpInterceptor {
  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).do(event => {
      this.loadingSubject.loadingObservable.next({show: true});
      if (event instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        this.loadingSubject.loadingObservable.next({show: false});
      }
    }, err => {
      if (err instanceof HttpErrorResponse) {
          this.loadingSubject.loadingObservable.next({show: false});
      }
    });
  }

  constructor(private loadingSubject:ObserrvableStoreService) {
  }

}
