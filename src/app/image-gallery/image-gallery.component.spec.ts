import { FilterimagesPipe } from './../filterimages.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ImageService } from '../image.service';
import { GalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let mock: ImageService ;
  let spy : any;

  beforeEach(async(() => {
    mock = new ImageService();
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent, FilterimagesPipe],
      providers: [
        {provide: ImageService,
        useValue: mock },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(mock,'getImages').and.returnValue([
      { id: 1, brand: "perro", url: "assets/images/perro1.jpg" },    
      { id: 2, brand: "perro", url: "assets/images/perro2.jpg" },
      { id: 3, brand: "gato", url: "assets/images/gato1.jpg" },
      { id: 4, brand: "gato", url: "assets/images/gato2.jpeg" },
      { id: 5, brand: "perro", url: "assets/images/perro3.jpg" }]);
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse el details', () => {
    expect(component).toBeTruthy();
  });
  it('debe haberse definido el getImages', () => {
    expect(mock.getImages).toBeDefined();
  });
  it('debe haberse llamado el getImages', () => {
    expect(mock.getImages).toHaveBeenCalled();
  });
});
