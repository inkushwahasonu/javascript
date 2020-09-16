/*
A recursive (recursively-defined) data structure is a structure that replicates itself in parts.

We’ve just seen it in the example of a company structure above.

A company department is:

Either an array of people.
Or an object with departments.
For web-developers there are much better-known examples: HTML and XML documents.

In the HTML document, an HTML-tag may contain a list of:

Text pieces.
HTML-comments.
Other HTML-tags (that in turn may contain text pieces/comments or other tags etc).

*/

// Linked list ---------------------------------------------------------------------------------

/**
 * The linked list element is recursively defined as an object with:

value.
next property referencing the next linked list element or null if that’s the end.

 */

// example
/**
  * let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
*/

//  or
// an alternative code for creation :
/**
  let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
 */
