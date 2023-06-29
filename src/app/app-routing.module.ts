import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomepageContentComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
