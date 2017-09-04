import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchWordsService} from '../search-words/search-words.service';
import {HttpModule} from '@angular/http';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpModule],
      declarations: [ SearchInputComponent ],
      providers: [SearchWordsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // relates to https://github.com/angular/angular/issues/7549
  // it('search should be called', () => {
  //   component.ngOnInit();
  //   spyOn(component, 'search');
  //   console.log(component.searchForm.controls['word'].valueChanges);
  //   component.searchForm.controls['word'].setValue('test text');
  //   let input = fixture.debugElement.nativeElement.querySelector('input');
  //   input.dispatchEvent(new Event('change'));
  //   fixture.detectChanges();
  //   expect(component.search).toHaveBeenCalledWith('test text');
  // });
});
