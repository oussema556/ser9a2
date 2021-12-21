export interface Animal{
    id: Number,
    animalImagePath: String,
    title: String,
    description: String,
    creationDate: String,
    ownerName:String,
    ownerImagePath: String,
    ownerNumber:String,
    place: String,
    likes: [
        userId: Number,
        animalId:Number,
        likeId:Number
    ]
}