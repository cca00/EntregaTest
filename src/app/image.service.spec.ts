import { async, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;
  let mock : ImageService;
  let spy: any;
  mock = new ImageService;

  it('debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageService ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: () => 2,
            }
          }
        },
        {provide: ImageService,
        useValue: mock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(mock, 'getImage').and.returnValue(null);
    service = new ImageService();
  });
  describe('getImages', () => {
    it('debe retornar el numero total de todas las imagenes', () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
    it('debe retornar el detalle de todas las imagenes', () => {
      let imagenes = service.getImages();
      expect(service.getImages()).toEqual([
        { id: 1, brand: "perro", url: "assets/images/perro1.jpg" },    
        { id: 2, brand: "perro", url: "assets/images/perro2.jpg" },
        { id: 3, brand: "gato", url: "assets/images/gato1.jpg" },
        { id: 4, brand: "gato", url: "assets/images/gato2.jpeg" },
        { id: 5, brand: "perro", url: "assets/images/perro3.jpg" }])
    });
    it('Debe verificar si la función getImages fue definido', () =>{
      expect(mock.getImages).toBeDefined();
    });
  });

  describe('getImage', () => {
    it('debe retornar los datos según el id que corresponde', () => {
      let imagene = service.getImage(4);
      expect(imagene.brand).toBe('gato');
      expect(imagene.url).toBe("assets/images/gato2.jpeg");
    });


    it('debe retornar indefinido si se busca una imagen con id menor que 0', () => {
      let imagene = service.getImage(-2);
      expect(imagene).toEqual(undefined);
    });

    it('Retorna indefinido cuando envio un id "X" que no se encuentre en la lista', () =>{
      const id = 99;
      let res = service.getImage(id);
      expect(res).toBeUndefined();
    });
    it('Debe verificar si la función getImage fue llamada "X" veces', () =>{
      expect(mock.getImage).toHaveBeenCalledTimes(0);
    });
    it('Debe verificar si la función getImage fue definido', () =>{
      expect(mock.getImage).toBeDefined();
    });
  });
});
