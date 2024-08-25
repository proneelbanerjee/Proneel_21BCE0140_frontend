import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfhlComponent } from './bfhl.component';

describe('BfhlComponent', () => {
  let component: BfhlComponent;
  let fixture: ComponentFixture<BfhlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BfhlComponent]
    });
    fixture = TestBed.createComponent(BfhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
