import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from '../../assets/post'

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  posts: Array<Posts>;
  filtro: string = 'amigos';
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.posts = JSON.parse(localStorage.getItem(localStorage.getItem('fb_auth')));
    if(typeof this.posts === 'undefined' || this.posts === null){
      this.posts = new Array<Posts>();
      this.posts.unshift({id: 0, visible: 'amigos', value: '', state: 'edit'});
    }
 }

  publicar(comentario, visibilidad, id){
    if(typeof comentario === 'undefined' || comentario === '' ){
      // TODO use modal window
      window.alert('Escribe algo');
    }else{
      if(id === 0){
        this.posts.shift();
        this.posts.unshift({id: Math.floor((Math.random() * 1000) + 1), visible: visibilidad, value: comentario, state: 'post'});
        this.posts.unshift({id: 0, visible: 'amigos', value: '', state: 'edit'});
      } else {
        for(let i=0; i<this.posts.length; i++){
          if(this.posts[i].id === id){
            this.posts[i].value = comentario;
            this.posts[i].visible = visibilidad;
            this.posts[i].state = 'post';
            break;
          }
        }
      }
      this.filtro = 'amigos';
      localStorage.setItem(localStorage.getItem('fb_auth'), JSON.stringify(this.posts));
    }
  }

  borrar(id){
    var respuesta = confirm("¿Estás seguro de que quieres eliminar el post?");
    if(respuesta){
      for(let i=0; i<this.posts.length; i++){
        if(this.posts[i].id === id){
          this.posts.splice(i,1);
            localStorage.setItem(localStorage.getItem('fb_auth'), JSON.stringify(this.posts));
          break;
        }
      }
    }
  }

  salir(){
    localStorage.removeItem('fb_auth');
    this.router.navigate(['/login']);
  }

}
