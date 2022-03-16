const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createNewThought,
    updateSingleThought,
    deleteSingleThought,
    addNewReaction,
    removeNewReaction
} = require('../../controllers/thoughtController');

// /api/thoughts 
router.route('/')
    .get(getThoughts) //Get All Thoughts
    .post(createNewThought); //Create New Thought

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateSingleThought)
    .delete(deleteSingleThought);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .post(addNewReaction)
    .delete(removeNewReaction);

module.exports = router;
