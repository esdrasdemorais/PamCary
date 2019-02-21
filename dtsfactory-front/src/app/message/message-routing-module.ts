import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { MessageComponent } from './message.component';

const routes: Routes = [
    {
        path: 'message',
        component: DashboardComponent,
        children: [
            {
                path: 'list',
                component: DashboardListComponent
            },
            {
                path: 'detail',
                component: DashboardDetailComponent
            },
            {
                path: 'add',
                component: MessageComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }