import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { FreezeoutComponent } from './freezeout/freezeout.component';
import { MLSAppComponent } from './mls-app/mls-app.component';
import { CcComponentComponent } from './cc-component/cc-component.component';
import { CookingComponent } from './cooking/cooking.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { OzarksComponent } from './ozarks/ozarks.component';
import { HamburgerDropdownComponent } from './hamburger-dropdown/hamburger-dropdown.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { MediaMosaicComponent } from './media-mosaic/media-mosaic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    FreezeoutComponent,
    MLSAppComponent,
    CcComponentComponent,
    CookingComponent,
    HomepageContentComponent,
    OzarksComponent,
    HamburgerDropdownComponent,
    ResumeComponent,
    AboutComponent,
    MediaMosaicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
