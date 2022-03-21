const { Schema, model } = require('mongoose');




// Create a new instance of the Mongoose schema to define shape of each document
// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required : true,
            trimmed : true
        },
      email: {
            type: String,
          required : true,
            unique : true,
          match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

userSchema.virtual('friendCount').get(function(){
    return  this.friends.length
})

const User = model('User',userSchema)
module.exports = User;