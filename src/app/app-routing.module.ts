import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
    {path: '', loadChildren: () => import('./home/home-page.module').then(m => m.HomePageModule)},
    {path: 'posts', loadChildren: () => import('./posts-two/posts-two-module.module').then(m => m.PostsTwoModuleModule)},
    {path: 'http', loadChildren: () => import('./http/http-page.module').then(m => m.HttpPageModule)},
    {path: 'form', loadChildren: () => import('./form/form-page.module').then(m => m.FormPageModule)},
    {path: 'error', loadChildren: () => import('./error/error-page.module').then(m => m.ErrorPageModule)},
    {path: 'pipes', loadChildren: () => import('./pipe/pipe-page.module').then(m => m.PipePageModule)},
    {path: 'rxjs', loadChildren: () => import('./rx-js/rx-js-module.module').then(m => m.RxJsModuleModule)},
    {path: '**', redirectTo: '/error'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {}