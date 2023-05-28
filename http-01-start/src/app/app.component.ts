import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  subscription: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}
  

  ngOnInit() {
    this.fetchPosts();
    this.subscription = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // this.postService
    //   .createAndStorePost(postData.title, postData.content)
    //   .subscribe(() => {
    //     this.fetchPosts();
    //   });
    this.postService
      .createAndStorePostSubscribed(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postService.delete().subscribe((data) => {
      console.log(data);
      this.loadedPosts = [];
    });
  }

  fetchPosts(){
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
      this.isFetching = false;
    }, error =>  {
      this.error = error.message;
      this.isFetching = false;
    });
  }

  onHandleError(){
    this.error = null;
  }
}
