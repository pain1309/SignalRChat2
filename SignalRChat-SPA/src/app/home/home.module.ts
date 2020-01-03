import { HomeComponent } from './components/home.component';
import { HomeRoutes } from './home.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HomeRoutes
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {}