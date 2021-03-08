import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('debe retornar todas las imagenes', () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('debe retornar la imagen con id si existe', () => {
      let imagene = service.getImage(1);
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
  });
});
