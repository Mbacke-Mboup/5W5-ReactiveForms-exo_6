import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  let sale: boolean = JSON.parse(localStorage.getItem("sale")!)
  let sucree: boolean = JSON.parse(localStorage.getItem("sucree")!)
  if (!sale && !sucree) {
    return createUrlTreeFromSnapshot(route, ['/verreDeau']);
  }
  else if (sale && !sucree) {
    return createUrlTreeFromSnapshot(route, ['/sel']);
  }
  else if (!sale && sucree) {
    return createUrlTreeFromSnapshot(route, ['/bonbon']);
  } else {
    return true;
  }
};
