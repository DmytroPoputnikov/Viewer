export class Post {
    numberOfLikes:  number;

    increaseLikes(){
        this.numberOfLikes=this.numberOfLikes+1;
    }

    decreaseLikes(){
        this.numberOfLikes=this.numberOfLikes-1;
    }
        
    constructor(){
        this.numberOfLikes=0;
    }


}
