import { RecipeService } from './services/recipe.service';
import { CookService } from './services/cook.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CookComponent } from './components/cook/cook.component';
import { NotfoundcomponentComponent } from './components/notfoundcomponent/notfoundcomponent.component';
import { UploadrecipeComponent } from './components/uploadrecipe/uploadrecipe.component';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecipeComponent,
    CookComponent,
    NotfoundcomponentComponent,
    UploadrecipeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'uploadrecipe', component: UploadrecipeComponent},
      {path: 'recipe', component: RecipeComponent},
      {path: 'cook', component: CookComponent},
      {path: 'login', component: LoginComponent},
      {path: '**', component: NotfoundcomponentComponent}
    ])
  ],
  providers: [CookService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
