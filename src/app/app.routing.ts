import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerComponent } from './player/player.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { AboutComponent } from './about/about.component';
import { Scene01Component } from './scene01/scene01.component';
import { Scene02Component } from './scene02/scene02.component';
import { Scene03Component } from './scene03/scene03.component';
import { Scene04Component } from './scene04/scene04.component';
import { Scene05Component } from './scene05/scene05.component';
import { Scene06Component } from './scene06/scene06.component';

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
    path: 'character-list',
    component: CharacterListComponent
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
    path: 'scene01',
    component: Scene01Component
  },
  {
    path: 'scene02',
    component: Scene01Component
  },
  {
    path: 'scene03',
    component: Scene01Component
  },
  {
    path: 'scene04',
    component: Scene01Component
  },
  {
    path: 'scene05',
    component: Scene01Component
  },
  {
    path: 'scene06',
    component: Scene01Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
