import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: 'animais',
    loadChildren: () =>
      import('./features/animals/animals.module').then((m) => m.AnimalsModule),
  },
  {
    path: 'pedidos-ajuda',
    loadChildren: () =>
      import('./features/help-requests/help-requests.module').then(
        (m) => m.HelpRequestsModule
      ),
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
