import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 { path: 'wall', component: WallComponent },
 { path: '**', redirectTo: 'login' }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
