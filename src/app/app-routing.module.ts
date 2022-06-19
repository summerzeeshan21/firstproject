import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuard } from './services/guard/auth-guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule),
    canActivate: [AuthGuardService],
  },
  {
    canActivate: [AuthGuardService],
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemPageModule)
  },
  {
    canActivate: [AuthGuardService],
    path: 'add-stock',
    loadChildren: () => import('./add-stock/add-stock.module').then(m => m.AddStockPageModule)
  },
  {
    canActivate: [AuthGuardService],
    path: 'add-consumption',
    loadChildren: () => import('./add-consumption/add-consumption.module').then(m => m.AddConsumptionPageModule)
  },
  {
    canActivate: [AuthGuardService],
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then(m => m.StockPageModule)
  },

  {
    canActivate: [AuthGuardService],
    path: 'consumption-report',
    loadChildren: () => import('./consumption-report/consumption-report.module').then(m => m.ConsumptionReportPageModule)
  },
  {
    canActivate: [AuthGuardService],
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersPageModule)
  },
  {
    canActivate: [AuthGuardService],
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
