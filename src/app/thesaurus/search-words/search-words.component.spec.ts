import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWordsComponent } from './search-words.component';
import {SearchInputComponent} from '../search-input/search-input.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchWordsService} from './search-words.service';

describe('SearchWordsComponent', () => {
  let component: SearchWordsComponent;
  let fixture: ComponentFixture<SearchWordsComponent>;
  let testData = {
    word: 'test',
    'definitions': [
      {
        'definition': 'test',
        'partOfSpeech': 'noun'
      },
      {
        'definition': 'test',
        'partOfSpeech': 'noun'
      }
    ],
    'synonyms': [
      'test',
      'test'
    ]
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpModule],
      declarations: [ SearchWordsComponent, SearchInputComponent ],
      providers: [SearchWordsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set data', () => {
    component.definitions = [];
    component.synonyms = [];
    component.setData(testData);
    expect(component.definitions.length && component.synonyms.length).toBeTruthy();
  });

  it('should reset data', () => {
    component.definitions = [1, 2, 3, 4];
    component.synonyms = ['1', '2', '3', '4'];
    component.setData(null);
    expect(component.definitions.length && component.synonyms.length).toBeFalsy();
  });

  it('should set word', () => {
    component.definitions = [1, 2, 3, 4];
    component.synonyms = ['1', '2', '3', '4'];
    component.selectWord({target: {innerText: 'test text'}, preventDefault: function(){}, stopPropagation: function(){}});
    expect(component.word).toEqual('test text');
  });
});
