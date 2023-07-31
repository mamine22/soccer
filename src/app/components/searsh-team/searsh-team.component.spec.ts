import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearshTeamComponent } from './searsh-team.component';

describe('SearshTeamComponent', () => {
  let component: SearshTeamComponent;
  let fixture: ComponentFixture<SearshTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearshTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearshTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
