import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDTO } from './dto/createPost.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  createPost(@Body() post: CreatePostDTO) {
    return this.postService.createPost(post);
  }

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }
}
