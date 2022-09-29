import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { GalleryModule } from  'ng-gallery';

import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { TrailerFiltersComponent } from './filters/trailer-filters/trailer-filters.component';
import { AdvancedTrailerFiltersComponent } from './filters/advanced-trailer-filters/advanced-trailer-filters.component';
import { AdvancedTrucksFiltersComponent } from './filters/advanced-trucks-filters/advanced-trucks-filters.component';
import { TrucksFiltersComponent } from './filters/trucks-filters/trucks-filters.component';
import { PartsFiltersComponent } from './filters/parts/parts-filters/parts-filters.component';
import { AdDescriptionComponent } from './ad-description/ad-description.component';
import { ImageCarouselComponent } from './ad-description/image-carousel/image-carousel.component';
import { TireFilterComponent } from './filters/parts/tire-filter/tire-filter.component';
import { RimsFilterComponent } from './filters/parts/rims-filter/rims-filter.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { AccountSettingsComponent } from './account/account-settings/account-settings.component';
import { PasswordComponent } from './account/password/password.component';
import { MessagesComponent } from './account/messages/messages.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { AdTruckToSevenComponent } from './create-ad/ad-truck-to-seven/ad-truck-to-seven.component';
import { AdTruckOverSevenComponent } from './create-ad/ad-truck-over-seven/ad-truck-over-seven.component';
import { AdTrailersComponent } from './create-ad/ad-trailers/ad-trailers.component';
import { TruckPartsComponent } from './create-ad/ad-parts/truck-parts/truck-parts.component';
import { RimsComponent } from './create-ad/ad-parts/rims/rims.component';
import { TireComponent } from './create-ad/ad-parts/tire/tire.component';
import { DeleteAccountComponent } from './account/delete-account/delete-account.component';
import { CardComponent } from './card/card.component';
import { ActiveAdsComponent } from './account/active-ads/active-ads.component';
import { InactiveAdsComponent } from './account/inactive-ads/inactive-ads.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { TruckToSevenFormComponent } from './shared/components/truck-to-seven-form/truck-to-seven-form.component';
import { TruckOverSevenFormComponent } from './shared/components/truck-over-seven-form/truck-over-seven-form.component';
import { DeleteDialogComponent } from './account/delete-dialog/delete-dialog.component';
import { TrailerFormComponent } from './shared/components/trailer-form/trailer-form.component';
import { RimFormComponent } from './shared/components/rim-form/rim-form.component';
import { TireFormComponent } from './shared/components/tire-form/tire-form.component';
import { PartsFormComponent } from './shared/components/parts-form/parts-form.component';
import { MessageDialogComponent } from './ad-description/message-dialog/message-dialog.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DeleteAccountDialogComponent } from './account/delete-account-dialog/delete-account-dialog.component';
import { CustomBreakPointsProvider } from 'src/custom-breakpoints';
import { TrailerDescriptionComponent } from './trailer-description/trailer-description.component';
import { TiresDescriptionComponent } from './tires-description/tires-description.component';
import { RimsDescriptionComponent } from './rims-description/rims-description.component';
import { PartsDescriptionComponent } from './parts-description/parts-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    FooterComponent,
    TrailerFiltersComponent,
    AdvancedTrailerFiltersComponent,
    AdvancedTrucksFiltersComponent,
    TrucksFiltersComponent,
    PartsFiltersComponent,
    AdDescriptionComponent,
    ImageCarouselComponent,
    TireFilterComponent,
    RimsFilterComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    AccountSettingsComponent,
    PasswordComponent,
    MessagesComponent,
    FavoritesComponent,
    CreateAdComponent,
    AdTruckToSevenComponent,
    AdTruckOverSevenComponent,
    AdTrailersComponent,
    TruckPartsComponent,
    RimsComponent,
    TireComponent,
    DeleteAccountComponent,
    CardComponent,
    ActiveAdsComponent,
    InactiveAdsComponent,
    EditAdComponent,
    TruckToSevenFormComponent,
    TruckOverSevenFormComponent,
    DeleteDialogComponent,
    TrailerFormComponent,
    RimFormComponent,
    TireFormComponent,
    PartsFormComponent,
    MessageDialogComponent,
    DeleteAccountDialogComponent,
    TrailerDescriptionComponent,
    TiresDescriptionComponent,
    RimsDescriptionComponent,
    PartsDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatRadioModule,
    MatMenuModule,
    MatDialogModule,
    CdkAccordionModule,
    MatSnackBarModule,
    NgxDropzoneModule,
    GalleryModule,
    FlexLayoutModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
