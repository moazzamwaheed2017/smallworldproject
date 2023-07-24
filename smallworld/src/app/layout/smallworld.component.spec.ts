import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallWorldComponent } from './smallworld.component';

describe('SmallWorldComponent', () => {
  let component: SmallWorldComponent;
  let fixture: ComponentFixture<SmallWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
