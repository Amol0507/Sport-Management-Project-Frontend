import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayerComponent } from './createplayer-component.component';

describe('CreatePlayerComponent', () => {
  let component: CreatePlayerComponent;
  let fixture: ComponentFixture<CreatePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
