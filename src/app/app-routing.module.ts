import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 'folder/Inbox'
  {
    path: '',
    redirectTo: 'folder/products',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'add-product-modal',
    loadChildren: () => import('./products/add-product-modal/add-product-modal.module').then( m => m.AddProductModalPageModule)
  },
  {
    path: 'shops',
    loadChildren: () => import('./shops/shops/shops.module').then( m => m.ShopsPageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice/invoice.module').then( m => m.InvoicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
