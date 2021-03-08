import { pipe } from 'rxjs';
import { FilterimagesPipe } from './filterimages.pipe';
import { ImageService } from  './image.service';


const Imagesdelatils = [    
  { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
  { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
  { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
  { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
  { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
]  

describe('FilterimagesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Filtrado de Imagenes', () => {
  it('Si da clic en "Perro" debe filtrar todos los perros',()=>{
    const pipe = new FilterimagesPipe();
    const imagesPerros = [  { 
      "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }];
    expect(pipe.transform(Imagesdelatils, 'perro')).toEqual(imagesPerros);
  });
  it('Si da clic en "Perro" debe filtrar todos los gatos',()=>{
    const pipe = new FilterimagesPipe();
    const imagesGatos = [
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" }];
    expect(pipe.transform(Imagesdelatils, 'gato')).toEqual(imagesGatos);
  });
});
