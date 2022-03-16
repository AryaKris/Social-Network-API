const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const userSchema = new Schema(
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

userSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

const User = model('User', userSchema)
module.exports = User;