import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  username!: string;
  apellido!: string;
  rut!: string;
  datos: {
    'Nombre Profesor': string;
    'Hora': string;
    'sala': string;
    'Dia': string;
  } = {
    'Nombre Profesor': '', // Puedes proporcionar valores iniciales si es necesario
    'Hora': '',
    'sala': '',
    'Dia': '',
  };
  constructor() { }

  ngOnInit() {
    const userDataString = localStorage.getItem('usuario');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.nombre) {
        this.username = userData.nombre;

      }
      if (userData.apellido) {
        this.apellido = userData.apellido;

      }
      if (userData.rut) {
        this.rut= userData.rut;

      }

    }
    const datosJSON = localStorage.getItem('profesor');

    if (datosJSON) {
  // Convierte la cadena JSON de nuevo a un objeto
    const datos = JSON.parse(datosJSON);

  // Asigna los datos al miembro del componente para que estén disponibles en el HTML
    this.datos = datos;
  }
}
}
