// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let returnedElements = [];
    function getClasses (currNode) {
        let children = currNode.childNodes;
        console.log(currNode.classList);
        // check for a classList && if classList contains <className>
        if (currNode.classList && currNode.classList.contains(className)) {
            // push current element into the returnedElements array            
            returnedElements.push(currNode);
        }
        // if currNode has child node, recurse
        if (children) {
            for (let i = 0; i < children.length; i++) {
                getClasses(children[i]);
            }
        }
    }
    getClasses(document.body);
    return returnedElements;
};
