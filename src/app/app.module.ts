import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GroupsModule} from './groups/groups.module';
import {TeamsModule} from './teams/teams.module';
import {WorldCupStatusModule} from './world-cup-status/world-cup-status.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GroupsModule,
    TeamsModule,
    WorldCupStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
