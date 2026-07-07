
import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('api/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('related')
  async getRelatedPosts() {
    try {
      return await this.postService.getRelatedPosts();
    } catch (error) {
      throw new HttpException('Error fetching posts', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('related')
  async createRelatedPost(@Body() body: { title: string; imageBase64: string }) {
    if (!body.title || !body.imageBase64) {
      throw new HttpException('Missing title or imageBase64', HttpStatus.BAD_REQUEST);
    }

    try {
      return await this.postService.createRelatedPost(body.title, body.imageBase64);
    } catch (error) {
      throw new HttpException('Error saving post', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
