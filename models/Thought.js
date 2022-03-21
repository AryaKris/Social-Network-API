const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// Create a new instance of the Mongoose schema to define shape of each document
// Schema to create Thought model
const thoughtSchema = new Schema(
    {
           thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength : 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }, 
        username: {
            type: String,
            required: true,
            
        },
        reactions: [
            reactionSchema

        ],
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

thoughtSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

const Thought = model('Thought', thoughtSchema)
module.exports = Thought;