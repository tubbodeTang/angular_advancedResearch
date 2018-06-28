import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamComponentComponent } from './dynam-component.component';

describe('DynamComponentComponent', () => {
  let component: DynamComponentComponent;
  let fixture: ComponentFixture<DynamComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
