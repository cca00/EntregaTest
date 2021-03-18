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
    it('debe retornar todas las imagenes', () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('debe retornar la imagen con id si existe', () => {
      let imagene = service.getImage(2);
      expect(imagene.brand).toEqual('perro');
    });

    it('debe retornar indefinido si se busca una imagen con id que NO existe', () => {
      let imagene = service.getImage(100);
      expect(imagene).toEqual(undefined);
    });

    it('Retorna indefinido cuando envio un id "X" que no se encuentre en la lista', () =>{
      const id = 99;
      let res = service.getImage(id);
      expect(res).toBeUndefined();
    });
    describe('getImage2', () => {
      it('Debe verificar si la función getImage fue llamada "X" veces', () =>{
        expect(mock.getImage).toHaveBeenCalledTimes(0);
      });
      it('Debe verificar si la función getImage fue definido', () =>{
        expect(mock.getImage).toBeDefined();
      });
      it('Debe verificar si la función getImages fue definido', () =>{
        expect(mock.getImages).toBeDefined();
      });
    });
  });
});
  /**it('should be created', () => {
    expect(service).toBeTruthy();
  });**/
