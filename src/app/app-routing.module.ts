import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PagesMainComponent } from './pages/pages-main/pages-main.component';

const routes: Routes = [
  { path: 'nav', component: NavBarComponent },
  { path: '', component: PagesMainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
