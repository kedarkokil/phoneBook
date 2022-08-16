import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneBookComponent } from './phone-book/phone-book.component';

const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo:'app-phone-book'
  },
  {
    path: 'app-phone-book', component: PhoneBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
