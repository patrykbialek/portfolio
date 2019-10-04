import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '',  },
  { path: '', component: AppComponent },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
