import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  datos = [];

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.buscarPosts();
  }

  buscarPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json()).subscribe(data => {
      this.datos = data;
    })
  }

  eliminarPost(index){
    this.datos.splice(index, 1);
  }
}
