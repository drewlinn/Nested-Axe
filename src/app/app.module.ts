import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerComponent } from './player/player.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { Scene01Component } from './scene01/scene01.component';
import { Scene02Component } from './scene02/scene02.component';
import { Scene03Component } from './scene03/scene03.component';
import { Scene04Component } from './scene04/scene04.component';
import { Scene05Component } from './scene05/scene05.component';
import { Scene06Component } from './scene06/scene06.component';
import { Scene07Component } from './scene07/scene07.component';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import { StartPageComponent } from './start-page/start-page.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlayerComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterEditComponent,
    Scene01Component,
    Scene02Component,
    Scene03Component,
    Scene04Component,
    Scene05Component,
    Scene06Component,
    AboutComponent,
    Scene07Component,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
