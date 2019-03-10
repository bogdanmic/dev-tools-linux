import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from "../environments/environment";

const routes: Routes = [
    // { path: '', component: CheckRequirementsComponent },
    // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: environment.routerEnableTracing })],
    exports: [RouterModule]
})
export class AppRoutingModule { }