"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    postService;
    constructor(postService) {
        this.postService = postService;
    }
    async getRelatedPosts() {
        try {
            return await this.postService.getRelatedPosts();
        }
        catch (error) {
            throw new common_1.HttpException('Error fetching posts', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createRelatedPost(body) {
        if (!body.title || !body.imageBase64) {
            throw new common_1.HttpException('Missing title or imageBase64', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.postService.createRelatedPost(body.title, body.imageBase64);
        }
        catch (error) {
            throw new common_1.HttpException('Error saving post', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Get)('related'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getRelatedPosts", null);
__decorate([
    (0, common_1.Post)('related'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createRelatedPost", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)('api/posts'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
//# sourceMappingURL=post.controller.js.map