import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";

import { SvgExampleComponent } from './svg-example/svg-example.component';
import { WebsocketComponent } from './websocket/websocket.component';
import { DynamComponentComponent } from './dynam-component/dynam-component.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'websocket',
        pathMatch: 'full'
    },
    {
        path: 'websocket',
        component: WebsocketComponent,
    },
    {
        path: 'svg',
        component: SvgExampleComponent,
    },
    {
        path: 'dynamicComponent',
        component: DynamComponentComponent,
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true })