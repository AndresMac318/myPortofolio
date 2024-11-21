import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksDetailComponent } from './works-detail.component';

describe('WorksDetailComponent', () => {
  let component: WorksDetailComponent;
  let fixture: ComponentFixture<WorksDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
