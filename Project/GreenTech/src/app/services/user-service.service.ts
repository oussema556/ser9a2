import { Animal } from 'src/app/models/animal';
import { User } from './../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  
  public updateProfile(user: User){
    this.http.put(`http://localhost:8080/profile=${user.id}/update`,user)
  }

  public getOwnPosts(id: any){
    return this.http.get(`http://localhost:8080/myPosts`,id)
  }

  public addPost(animal: Animal){
    return this.http.post("http://localhost:8080/createPost",animal)
  }

  public updatePost(animal: Animal){
    return this.http.put(`http://localhost:8080/updatePost/post=${animal.id}`,animal)
  }

  public deletePost(id: any){
    return this.http.delete(`http://localhost:8080/deletePost/post=${id}`,id)
  }
  
}
