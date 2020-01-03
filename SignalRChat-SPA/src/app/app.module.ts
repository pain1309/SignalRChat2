import { NewsModule } from './news/news.module';
import { HomeModule } from './home/home.module';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutes, HomeModule, StoreModule.forRoot({}), EffectsModule.forRoot([]), NewsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
