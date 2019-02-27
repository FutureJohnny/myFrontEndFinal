

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

// Import our services
import { AuthLoginService} from "./services/auth-login.service";
import { AlertService } from './services/alert.service';
import { AuthRegisterService } from './services/auth-register.service';
import { ReviewService } from './services/review.service';

// Import routing and AuthGuard
import { AppRouting } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';


//Import our helpers
import { ErrorInterceptorProvider } from './services/helper/error.interceptor';
import { JwtInterceptorProvider } from './services/helper/jwt.interceptor';

// Imports material
import { MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCommonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import our components
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './directives/alert/alert.component';
import { MenuComponent } from './menu/menu.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhereWeAreComponent } from './where-we-are/where-we-are.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

// Imports for Ngx editor to work
import {NgxEditorModule} from 'ngx-editor';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    MenuComponent,
    CreateReviewComponent,
    EditReviewComponent,
    MyReviewsComponent,
    EditUserProfileComponent,
    CreateAdminComponent,
    UserManagementComponent,
    AboutUsComponent,
    ContactUsComponent,
    WhereWeAreComponent,
    AdminDashboardComponent,
    ViewReviewsComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    MatMenuModule,
    MatCommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDialogModule,
    MatLineModule,
    MatChipsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatRadioModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NgxEditorModule,
    AngularFontAwesomeModule
  ],
  // Our service providers
  providers: [
    AuthRegisterService,
    AuthLoginService,
    AuthGuard,
    AlertService,
    ReviewService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
