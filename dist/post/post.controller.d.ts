import { PostService } from './post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getRelatedPosts(): Promise<{
        id: number;
        title: string;
        imageBase64: string;
        createdAt: Date;
    }[]>;
    createRelatedPost(body: {
        title: string;
        imageBase64: string;
    }): Promise<{
        id: number;
        title: string;
        imageBase64: string;
        createdAt: Date;
    }>;
}
