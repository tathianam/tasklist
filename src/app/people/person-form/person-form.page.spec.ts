import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonFormPage } from './person-form.page';

describe('PersonFormPage', () => {
  let component: PersonFormPage;
  let fixture: ComponentFixture<PersonFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
