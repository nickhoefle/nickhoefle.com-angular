import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: HomepageContentComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
