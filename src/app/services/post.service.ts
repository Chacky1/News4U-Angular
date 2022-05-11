import { Post } from "../models/post.model";

export class PostService {
    posts: Post[] = [
        {
            id: 0,
            title: 'Vivre comme un nomade',
            text: 'Comment peut-on vivre comme un nomade en 2021 ? Le télétravail bat son plein et le nombre de freelance augmente jour après jour... Les gens veulent désormais des choses différentes, travailler différemment, voir davantage leur famille, voyager davantage et finalement être plus humain...',
            author: 'Alban',
            lastUpdate: new Date(),
            image: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg',
        },
        {
            id: 1,
            title: 'Pourquoi apprendre React ?',
            text: 'Aujourd\'hui, le développement web est bien présent partout... Mais plus le temps passe plus les besoins en développement mobile se font aussi sentir. Tout le monde veut sa propre application ! React permet de s\'ouvrir des portes sur les deux mondes ! Et c\'est une technologie qui est vraiment tendance.',
            author: 'Bob',
            lastUpdate: new Date(),
            image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg'
        }
    ]

    constructor() {}

    getPost(postId: number): Post {
        return this.posts[postId]
    }

    computeNewId(): number {
        const newId = this.posts[this.posts.length - 1].id + 1
        return newId
    }

    addNewPost(title: string, image: string, text: string): void {
        const newId: number = this.computeNewId()
        const newPost: Post = new Post(newId, title, text, '', new Date(), image)
        this.posts.push(newPost)
    }

    editPost(editedPost: Post): void {
        for(const post of this.posts) {
            if (post.id === editedPost.id) {
                post.text = editedPost.text
            }
        }
    }
}