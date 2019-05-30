/** 
 * Default configuration of program, can be changed based on your preference
 */
var disableDropping = false; // set true to disable dropping function
var disableReordering = false; // set true to disable reordering function
var allowIntermediarySave = false; // set false (suggested) if we only allows annotator to save only when the annotation is done; true if annotators can save midway


/** 
 * Relations and their color
 * The relations that can be used in the tool, you can add or delete the relation in this list
 */
var availableRels = ["collection", "comparison", "description", "causation", "response", "directed"] 
// var availableRels = ["att", "det", "sup", "="] 

/** 
 * The corresponding color for the relation, i.e., the first element of relColor for the first relation in availableRels list. 
 * You can use available colors in HTML color picker https://www.w3schools.com/colors/colors_picker.asp
 * For example, change "lightgreen" to "#ff0000"
 */
var relColors = ["lightgray", "lightpink", "lightblue", "lightgreen", "goldenrod", "black"] 
// var relColors = ["lightpink", "lightblue", "lightgreen", "lightgray"] 

/**
 * Corresponding relation type, true if directed (asymmetrical) and false if undirected (symmetrical)
 */
var relDirections = [false, false, true, true, true, true]
// var relDirections = [true, true, true, false]
