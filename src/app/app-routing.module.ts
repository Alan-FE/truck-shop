import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdvancedTrailerFiltersComponent } from './filters/advanced-trailer-filters/advanced-trailer-filters.component';
import { AdvancedTrucksFiltersComponent } from './filters/advanced-trucks-filters/advanced-trucks-filters.component';
import { AdDescriptionComponent } from './ad-description/ad-description.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { PasswordComponent } from './account/password/password.component';
import { AccountSettingsComponent } from './account/account-settings/account-settings.component';
import { MessagesComponent } from './account/messages/messages.component';
import { ActiveAdsComponent } from './account/active-ads/active-ads.component';
import { InactiveAdsComponent } from './account/inactive-ads/inactive-ads.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { DeleteAccountComponent } from './account/delete-account/delete-account.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { TrailerDescriptionComponent } from './trailer-description/trailer-description.component';
import { TiresDescriptionComponent } from './tires-description/tires-description.component';
import { RimsDescriptionComponent } from './rims-description/rims-description.component';
import { PartsDescriptionComponent } from './parts-description/parts-description.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'ad', component: CreateAdComponent},
  {path: 'edit-ad/:id/:category', component: EditAdComponent},
  {path: 'account', component: AccountComponent,
    children: [
      {path: 'settings', component: AccountSettingsComponent},
      {path: 'password', component: PasswordComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'active-ads', component: ActiveAdsComponent},
      {path: 'inactive-ads', component: InactiveAdsComponent},
      {path: 'favorites', component: FavoritesComponent},
      {path: 'delete-account', component: DeleteAccountComponent}
    ]
  },
  {path: 'ad-description/:id', component: AdDescriptionComponent},
  {path: 'trailer-description/:id', component: TrailerDescriptionComponent},
  {path: 'tires-description/:id', component: TiresDescriptionComponent},
  {path: 'rims-description/:id', component: RimsDescriptionComponent},
  {path: 'parts-description/:id', component: PartsDescriptionComponent},
  {path: 'advanced-trucks-filters', component: AdvancedTrucksFiltersComponent},
  {path: 'advanced-trailers-filters', component: AdvancedTrailerFiltersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
