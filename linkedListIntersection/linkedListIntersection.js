/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  var list1Arr = [];
  function traverseAndStore(list1) {
    list1Arr.push(list1);
    if (list1.next !== null) {
      return traverseAndStore(list1.next)
    }
  }
  function traverseAndCompare(list2) {
    for (let i = 0; i < list1Arr.length; i++) {
      if (list1Arr[i] === list2) {
        return list1Arr[i]
      } 
    }
    if (list2.next !== null) {
      return traverseAndCompare(list2.next)
    }
    return null;
  }
  traverseAndStore(list1);
  return traverseAndCompare(list2)
  // function traverseAndFind(node, val = null) {
  //   if (node.value === val ) {
  //     return node;
  //   } else if (node.next !== null) {
  //     return traverseAndFind(node.next, val) 
  //   } else {
  //     return null;
  //   }
  // }
  // function traverseAndStore(node) {

  // }
  // TODO: Implement this function!
}
