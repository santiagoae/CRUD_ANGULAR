import { Component, OnInit } from '@angular/core';


//importamos el modelo
import { Post } from 'src/app/post.model';
//importamos el servicio
import { PostService } from 'src/app/post.service';

PostService
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Posts: Post[]

  constructor( private postService: PostService ) { }

  ngOnInit(): void {
    //console.log(this.postService.getPosts())
    //estos son observables con el metodo subscibe para no usar endpoints
    this.postService.getPosts().subscribe( (res)=> {
      this.Posts = res.map( (e) => {
        return{
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        }
      })
    })
  }
deleteRow = (post) => this.postService.deletePost(post);
}
