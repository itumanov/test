import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchWordsComponent } from './search-words/search-words.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchWordsService} from './search-words/search-words.service';
import {HttpModule} from '@angular/http';
import { SearchInputComponent } from './search-input/search-input.component';

const routes: Routes = [{
  path: '',
  component: SearchWordsComponent
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchWordsComponent, SearchInputComponent],
  providers: [SearchWordsService]
})
export class ThesaurusModule { }
