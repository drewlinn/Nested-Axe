import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerComponent } from './player/player.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { AboutComponent } from './about/about.component';
<<<<<<< HEAD
=======
import { CharacterDetailComponent } from './character-detail/character-detail.component';

//scene components
>>>>>>> 9a200c2c624c0030d4812c102cde619fb25ca7fb
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
    path: 'characters/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
<<<<<<< HEAD
    path: 'welcome',
    component: WelcomeComponent
  },
  {
=======
>>>>>>> 9a200c2c624c0030d4812c102cde619fb25ca7fb
    path: 'scene01',
    component: Scene01Component
  },
  {
    path: 'scene02',
<<<<<<< HEAD
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
=======
    component: Scene02Component
  },
  {
    path: 'scene03',
    component: Scene03Component
  },
  {
    path: 'scene04',
    component: Scene04Component
  },
  {
    path: 'scene05',
    component: Scene05Component
>>>>>>> 9a200c2c624c0030d4812c102cde619fb25ca7fb
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
