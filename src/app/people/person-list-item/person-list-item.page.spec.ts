import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonListItemPage } from './person-list-item.page';

describe('PersonListItemPage', () => {
  let component: PersonListItemPage;
  let fixture: ComponentFixture<PersonListItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonListItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonListItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
