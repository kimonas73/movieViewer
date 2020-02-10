import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostpopularComponent } from './mostpopular.component';

describe('MostpopularComponent', () => {
  let component: MostpopularComponent;
  let fixture: ComponentFixture<MostpopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostpopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
