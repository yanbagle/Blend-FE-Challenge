import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotesViewComponent } from './home/notes-view/notes-view.component';
import { HeaderComponent } from './home/header/header.component';
import { PostItNoteComponent } from './modals/post-it-note/post-it-note.component';
import { AddPostItNoteComponent } from './modals/add-post-it-note/add-post-it-note.component';
import {KeysPipe} from './pipes/KeysPipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesViewComponent,
    HeaderComponent,
    PostItNoteComponent,
    AddPostItNoteComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
