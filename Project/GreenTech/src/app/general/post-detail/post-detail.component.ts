import { PostServiceService } from './../../services/post-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  id=0
  constructor(private route:ActivatedRoute,private postService: PostServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id= +params['id']
      console.log(this.id)
     let resp= this.postService.getPostById(this.id)
    })
  }



}
