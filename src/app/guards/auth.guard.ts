import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
 
export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  
    console.log(route.routeConfig?.path);    
    return confirm("are you sure you want to enter your routes");
};