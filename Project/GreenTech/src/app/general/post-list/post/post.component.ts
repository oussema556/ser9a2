import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  @Input()
  post: Animal={
    id:0,
    animalImagePath:"",
    title:"",
    description:"",
    creationDate:"",
    ownerName:"",
    ownerImagePath:"",
    ownerNumber:"",
    place:"",
    likes: [
      0,0,0
    ]
  }
  constructor() {
   }

  ngOnInit(): void {
    
  }
  likeAnimal(){
    
  }

}
