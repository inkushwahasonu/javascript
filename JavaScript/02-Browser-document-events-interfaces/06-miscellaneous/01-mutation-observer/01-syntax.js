//  mutation observer

//  syntax



// first , we create an observer with a callback-function:
let obsurver = new MutationObserver(callback);

// and then attach it to DOM node





// config is an object with boolean options “what kind of changes to react on”:

// childList – changes in the direct children of node,
// subtree – in all descendants of node,
// attributes – attributes of node,
// attributeFilter – an array of attribute names, to observe only selected ones.
// characterData – whether to observe node.data (text content),



// ----------------------------------------

// MutationRecord objects have properties:

// type – mutation type, one of
// "attributes": attribute modified
// "characterData": data modified, used for text nodes,
// "childList": child elements added/removed,
// target – where the change occurred: an element for "attributes", or text node for "characterData", or an element for a "childList" mutation,
// addedNodes/removedNodes – nodes that were added/removed,
// previousSibling/nextSibling – the previous and next sibling to added/removed nodes,
// attributeName/attributeNamespace – the name/namespace (for XML) of the changed attribute,
// oldValue – the previous value, only for attribute or text changes, if the corresponding option is set attributeOldValue/characterDataOldValue.
