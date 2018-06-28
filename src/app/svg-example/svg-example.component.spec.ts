import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgExampleComponent } from './svg-example.component';

describe('SvgExampleComponent', () => {
  let component: SvgExampleComponent;
  let fixture: ComponentFixture<SvgExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
