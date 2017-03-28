import { AppComponent } from "./app.component";
import { NewProjectComponent } from "./new-project/new-project.component";
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTING = [
  { path: 'new-project', component: NewProjectComponent },
  { path: '', component: AppComponent }
];

// export const APP_ROUTES_PROVIDER = [
//   provideRouter(APP_ROUTES)
// ];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTING);
