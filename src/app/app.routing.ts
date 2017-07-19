import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerComponent } from './player/player.component';
import { CharacterListComponent } from './character-list/character-list.component'

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
