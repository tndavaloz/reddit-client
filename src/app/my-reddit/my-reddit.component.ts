import { Component, OnInit, Input } from '@angular/core';
import { MyDataService } from '../my-data.service';
import { Post } from '../post';

@Component({
  selector: 'app-my-reddit',
  templateUrl: './my-reddit.component.html',
  styleUrls: ['./my-reddit.component.css'],
  providers: [MyDataService]
})
export class MyRedditComponent implements OnInit {
  @Input('subreddit') subreddit:string;

  posts: Post[];

  constructor(private data: MyDataService) { }

  ngOnInit() {
    this.data.fetchPosts(this.subreddit).subscribe(
      posts => this.posts = posts
    );
  }

}
