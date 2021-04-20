import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserformComponent } from './userform/userform.component';
import { SearchComponent } from './search/search.component';
import {RouterModule,Routes} from '@angular/router'
const appRoutes:Routes = [
  {path:'',component: UserformComponent},
  {path:'search',component: SearchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserformComponent, SearchComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule, FormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent] //first component
})
export class AppModule { }
