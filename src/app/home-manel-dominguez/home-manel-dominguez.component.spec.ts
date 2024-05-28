import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManelDominguezComponent } from './home-manel-dominguez.component';

describe('HomeManelDominguezComponent', () => {
  let component: HomeManelDominguezComponent;
  let fixture: ComponentFixture<HomeManelDominguezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeManelDominguezComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeManelDominguezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
