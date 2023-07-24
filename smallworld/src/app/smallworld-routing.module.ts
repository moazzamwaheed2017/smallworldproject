import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SmallWorldRoutes } from "./smallworld-routes";

@NgModule({
  imports: [
    RouterModule.forRoot(SmallWorldRoutes.ROUTES, {
      scrollPositionRestoration: 'top',
      useHash: true,
    }),
  ],
  exports: [RouterModule]
})
export class SmallWorldRoutingModule {}