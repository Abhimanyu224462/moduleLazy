import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";


@Injectable({
    providedIn:'root'
})

export class canAccessGuard implements CanLoad{
    canLoad(route: Route, segments: UrlSegment[]): boolean{
        return false
    }




}