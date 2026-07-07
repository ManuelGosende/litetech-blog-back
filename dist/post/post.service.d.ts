import { PrismaService } from '../prisma.service';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    getRelatedPosts(): Promise<{
        id: number;
        title: string;
        imageBase64: string;
        createdAt: Date;
    }[]>;
    createRelatedPost(title: string, imageBase64: string): Promise<{
        id: number;
        title: string;
        imageBase64: string;
        createdAt: Date;
    }>;
}
