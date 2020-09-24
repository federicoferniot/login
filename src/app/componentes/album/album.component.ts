import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public regionActual = "Europa";
  public listadoPaises = [];
  public open = false;
  public paisDetalle;

  constructor(private paisesService: PaisesService) {
    this.regionActual = "Europa";
    this.paisesService.getRegion('europe').subscribe((resultado: any)=>{
      this.listadoPaises = resultado;
    })
  }

  ngOnInit(): void {
  }

  cambiarRegion(event){
    this.paisesService.getRegion(event).subscribe((resultado: any) => {
      this.listadoPaises = resultado;
    });
    switch (event) {
      case 'europe':
        this.regionActual = "Europa";
        break;
      case 'asia':
        this.regionActual = "Asia";
        break;
      case 'americas':
        this.regionActual = "América";
        break;
      case 'africa':
        this.regionActual = "Africa";
        break;
      case 'oceania':
        this.regionActual = "Oceanía"
      default:
        break;
    }
  }

  abrirModal(pais){
    this.paisDetalle = pais;
    this.open = true;
  }

  cerrarModal(){
    this.open = false;
  }

}
