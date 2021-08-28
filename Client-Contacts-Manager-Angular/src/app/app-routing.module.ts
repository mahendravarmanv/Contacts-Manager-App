import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ClientPageComponent } from "./client/client-page/client-page.component";
import { CompanyPageComponent } from "./company/company-page/company-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "client/:id",
    component: ClientPageComponent,
  },
  {
    path:'',
    redirectTo:'/client',
    pathMatch:"full",
  },
  {
    path: 'company',
    component: CompanyPageComponent,
  },
  {
    path:"about",
    component:AboutPageComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}