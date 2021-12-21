import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  public getAllPosts(){
    return this.http.get("http://localhost:8080/posts")
  }

  public getPostsByKeyword(keyword : any){
   return this.http.get(`http://localhost:8080/posts/keyword=${keyword}`,keyword)
  }

  public getPostById(id: any){
    return this.http.get(`http://localhost:8080/posts/user=${id}`,id)
  }

}
