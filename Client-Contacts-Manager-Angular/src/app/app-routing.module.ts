import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientPageComponent } from "./client/client-page/client-page.component";

const routes: Routes = [
  {
    path: "client",
    component: ClientPageComponent,
  },
  {
    path:'',
    redirectTo:'/client',
    pathMatch:"full",
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}