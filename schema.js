/* Temporary Schema Design */
const table = {
  id: String,
  owner: String, // User ID of the creator of the table
  actors: [ String ], // Array of Actor IDs that have access to this board
  board: String, // Board ID of the top level board for the table
}

const board = {
  id: String,
  lock: Boolean, // Toggles the ability to post to this board
  title: String, // Title name of a given board
  text: String, // Optional Descriptive text for a board
  flavor: String, // Optional flavor text (styled) for a board
  parent: String, // Board ID of the parent board, if any
  children: [ String ], // Array of child Board IDs this board contains
  posts: [ String ], // Array of Post IDs 
}

const post = {
  id: String,
  created: String, // Timestamp of when the post was created
  updated: String, // Timestamp of when the post of edited
  author: String, // User ID of the author of this post
  board: String, // Board ID that this post belongs to
  parent: String, // Post ID of a single parent post
  children: [ String ], // Array of child posts made in reply to this post
  
  identity: String, // Optional alternate poster identity
  context: String, // Enumerable of story/combat/general
  lock: { // Lock settings for a given post
    reply: Boolean, // Toggle ability to reply to this post
    edit: Boolean, // Toggle ability to edit this post
  }, 
  ooctext: String, // Out of character text
  ictext: String, // In-character text
  ruling: String, // Table owner comments on rulings related to this post
  private: { // Optional private text that is viewable to only specified characters
    viewers: [ String ], // Array of character IDs of characters who are allowed to see such text
    ooctext: String, // Private out of characer text
    ictext: String, // Private in character text
    ruling: String, // Private table owner comments on rulings related to this post
  },

  checks: {
    active: Boolean, // Toggle dice check visibility
    waiting: Boolean, // Toggle for whether or not an active roll is waiting for approval or action
    initiate: String, // ID of the Owner or Actor who initiated this check
    text: String, // Description of what is to be rolled on
    max: Number, // The maximum number of dice rolls allowed on this check
    result: { // Optional text to show on a success of failure
      success: String,
      failure: String,
    },
    dice: [ // Array of the accumulated dice rolls
      {
        allowed: [ String ], // Array of valid Actor IDs that can make this roll
        roller: String, // Actor/Owner name of the person who rolled
        size: Number, // The numeric size of the dice to be used for all rolls
        result: Number, // The result of the randomly generated dice roll
        modifier: Number, // The number to add to this roll
        note: String, // Optional note about a given roll
      }
    ],
  },
}
