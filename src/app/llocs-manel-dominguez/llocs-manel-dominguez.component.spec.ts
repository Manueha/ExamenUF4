import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlocsManelDominguezComponent } from './llocs-manel-dominguez.component';

describe('LlocsManelDominguezComponent', () => {
  let component: LlocsManelDominguezComponent;
  let fixture: ComponentFixture<LlocsManelDominguezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlocsManelDominguezComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LlocsManelDominguezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
