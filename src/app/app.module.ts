import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlighterPipe } from './pipes/highlighter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    HighlighterPipe,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
