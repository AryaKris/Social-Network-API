const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        published: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        tags: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Tag',
            },
        ],
        text: {
            type: String,
            minLength: 15,
            maxLength: 500,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);