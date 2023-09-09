import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
 import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
      this.formularioLogin = this.fb.group({
        "nombre": new FormControl("",Validators.required),
        "apellido": new FormControl("",Validators.required),
        "rut": new FormControl("",Validators.required),
        "usuario": new FormControl("",Validators.required),
        "password": new FormControl("",Validators.required)
      });
    }
  ngOnInit() {
  }
  async guardar(){
    var f = this.formularioLogin.value;

    if(this.formularioLogin.invalid){
      const alert = await this.alertController.create({
        header:'Datos incorrectos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    this.navCtrl.navigateRoot('login');
    var usuario = {
      nombre: f.nombre,
      apellido: f.apellido,
      rut: f.rut,
      usuario:f.usuario,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
}
