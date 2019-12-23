import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsComponent } from './comics/comics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { IsbnscannerComponent } from './isbnscanner/isbnscanner.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'comics', component: ComicsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: ComicDetailComponent },
    { path: 'isbnscan', component: IsbnscannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
