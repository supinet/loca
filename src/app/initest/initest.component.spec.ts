import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitestComponent } from './initest.component';

describe('InitestComponent', () => {
  let component: InitestComponent;
  let fixture: ComponentFixture<InitestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
