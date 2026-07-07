
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getRelatedPosts() {
    return this.prisma.relatedPost.findMany({
      orderBy: { createdAt: 'desc' },
      take: 3,
    });
  }

  async createRelatedPost(title: string, imageBase64: string) {
    return this.prisma.relatedPost.create({
      data: {
        title,
        imageBase64,
      },
    });
  }
}
