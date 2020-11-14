import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, registerElement } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from './main/main.component'
import { HttpClientModule } from '@angular/common/http';
import { CardView } from '@nstudio/nativescript-cardview';
import { FirstComponent} from './first/first.component'
registerElement('CardView', () => CardView);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule, 
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        MainComponent, 
        FirstComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
