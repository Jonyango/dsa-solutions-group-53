/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 

Constraints:

The number of nodes in both trees is in the range [0, 100].
-10^4 <= Node.val <= 10^4
 */
var isSameTree = function() {
    // Method One - this assumes the input is an array
    // return JSON.stringify(treeOne) === JSON.stringify(treeTwo) ? true : false

// Usage with an example
    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BinaryTree{
        constructor(){
            this.root = null;
            this.inOrderTraversalArray = [];
        }

        insert(node){
            const newNode = new Node(node);
            if(this.root === null){
                this.root = newNode;
            }else{
                this.insertNode(this.root, newNode);
            }
        }

        insertNode(node, newNode){
            if(node.data > newNode.data){
                if(node.left === null){
                    node.left = newNode;
                }else{
                    this.insertNode(node.left, newNode);
                }
            }else{
                if(node.right === null){
                    node.right = newNode;
                }else{
                    this.insertNode(node.right, newNode);
                }
            }
        }

        inOrderTraversal(tree){
            if(tree === null) return;
            tree.left && this.inOrderTraversal(tree.left);
            this.inOrderTraversalArray.push(tree.data);
            tree.right && this.inOrderTraversal(tree.right);
            return this.inOrderTraversalArray;
        }
    }

        const treeOne = new BinaryTree();
        const treeTwo = new BinaryTree();
        treeOne.insert(2);
        treeOne.insert(1);
        treeOne.insert(3);
        treeTwo.insert(1);
        treeTwo.insert(2);
        treeTwo.insert(4);
        treeTwo.insert(3);

    const checkEquality =(p, q)=>{
        return JSON.stringify(p) === JSON.stringify(q) 
    }

    // Method Two - here I created a function that takes in two actual trees and compares them
    return checkEquality(treeOne.inOrderTraversal(treeOne.root), treeTwo.inOrderTraversal(treeTwo.root));
};

console.log(isSameTree())