import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
import { ImageDetailComponent } from './image-details.component';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let mock: ImageService ;
  let spy : any;
  let otroSpy:any;

  beforeEach(async(() => {
    mock = new ImageService();
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: () => 2,
            },
          },
        },
        {provide: ImageService,
        useValue: mock },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(mock,'getImage').and.returnValue({
      id: 1,
      brand:"perro",
      url: "assets/images/perro1.jpg"
    });
    otroSpy = spyOn(mock,'getImages').and.returnValues([
      { id: 1, brand: "perro", url: "assets/images/perro1.jpg" },    
      { id: 2, brand: "perro", url: "assets/images/perro2.jpg" },
      { id: 3, brand: "gato", url: "assets/images/gato1.jpg" },
      { id: 4, brand: "gato", url: "assets/images/gato2.jpeg" },
      { id: 5, brand: "perro", url: "assets/images/perro3.jpg" }]
    );
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('debe crearse el details', () => {
    expect(component).toBeTruthy();
  });
  it('debe haberse definido el getImages', () => {
    expect(mock.getImages).toBeDefined();
  });
  it('debe haberse definido el getImage', () => {
    expect(mock.getImage).toBeDefined();
  });
  it('debe haberse llamado el getImage', () => {
    expect(mock.getImage).toHaveBeenCalled();
  });
});
