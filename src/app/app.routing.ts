import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerComponent } from './player/player.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { AboutComponent } from './about/about.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterComponent } from './character/character.component';

//scene components
import { StartPageComponent } from './start-page/start-page.component';
import { Scene01Component } from './scene01/scene01.component';
import { Scene02Component } from './scene02/scene02.component';
import { Scene03Component } from './scene03/scene03.component';
import { Scene04Component } from './scene04/scene04.component';
import { Scene05Component } from './scene05/scene05.component';
import { Scene06Component } from './scene06/scene06.component';
import { Scene07Component } from './scene07/scene07.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'character-list',
    component: CharacterListComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'scene01/:id',
    component: Scene01Component
  },
  {
    path: 'scene02/:id',
    component: Scene02Component
  },
  {
    path: 'scene03/:id',
    component: Scene03Component
  },
  {
    path: 'scene04/:id',
    component: Scene04Component
  },
  {
    path: 'scene05/:id',
    component: Scene05Component
  },
  {
    path: 'scene06/:id',
    component: Scene06Component
  },
  {
    path: 'scene07/:id',
    component: Scene07Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
