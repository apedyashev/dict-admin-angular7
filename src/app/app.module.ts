import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
// import { UsersComponent } from './pages/users/users.component';
import { UsersModule } from './pages/users/users.module';
import { JwtInterceptor /*, ErrorInterceptor*/ } from './helpers';
import '@angular/material/prebuilt-themes/indigo-pink.css';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';

@NgModule({
  // The components, directives, and pipes that belong to this NgModule.
  declarations: [AppComponent, LoginComponent, /*UsersComponent,*/ SidebarItemComponent],
  // The subset of declarations that should be visible and usable in the component templates of
  // other NgModules.
  // exports: [],
  // Other modules whose exported classes are needed by component templates declared in this NgModule
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UsersModule
  ],
  // Creators of services that this NgModule contributes to the global collection of services;
  // they become accessible in all parts of the app. (You can also specify providers at the component
  // level, which is often preferred.)
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  // The main application view, called the root component, which hosts all other app views. Only the
  // root NgModule should set the bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule {}
