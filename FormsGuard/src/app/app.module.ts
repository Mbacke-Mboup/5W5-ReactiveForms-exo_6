import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerreDEauComponent } from './verreDEau/verreDEau.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { CaramelAuSelComponent } from './caramelAuSel/caramelAuSel.component';
import { RouterModule, Routes } from '@angular/router';
import { SelComponent } from './sel/sel.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { guardGuard } from './guard.guard';

const routes: Routes = [
  {
    path: '', component: ParentComponent, children: [
      { path: 'sel', component: SelComponent },
      { path: 'verreDeau', component: VerreDEauComponent },
      { path: 'bonbon', component: BonbonComponent },
      { path: 'caramelAuSel', component: CaramelAuSelComponent, canActivate: [guardGuard] },
    ]
  }

];
@NgModule({
  declarations: [
    AppComponent,
    VerreDEauComponent,
    BonbonComponent,
    CaramelAuSelComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
