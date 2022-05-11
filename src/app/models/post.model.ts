export class Post {
    constructor(
        public id: number,
        public title: string,
        public text: string,
        public author: string,
        public lastUpdate: Date,
        public image?: string
    ) { }
}