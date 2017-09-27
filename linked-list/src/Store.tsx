import * as React from 'react';
import { observable, action } from 'mobx';
import Node from './Node';

export default class Store extends React.Component {
	// the root linked list node 
	@observable root: any = null;
	// the number of nodes in linked list
	@observable count: number = 0;
	// set the number of nodes in linked list
	@action.bound increment(): void {
		this.count++;
	}
	// set the root linked list node 
	@action.bound setRoot(root: any): void {
		this.root = root;
	}
	/**
	 * Adds initial node to linked list 
	 * @param {number} value 
	 */
	@action.bound addInitial(value: number): void {
		this.setRoot(<Node value={value} next={null} />);
	}

	/**
	 * Obtain node at given index
	 * @param {number} index
	 */
	//  getNode(index: number): Node {

	//  }

	/**
	 * Adds node to end of linked list 
	 * @param value 
	 */
	addLast(value: number): void {
		if (this.root === null) {
			this.addInitial(value); return;
		}
		let nodeCursor: any = this.root;
		while (nodeCursor.props.next !== null) {
			nodeCursor = nodeCursor.props.next;
		}
		nodeCursor.props.next = <Node value={value} next={null} />;
	}

	/**
	 * Add node to linked list at given index 
	 * @param {number} index
	 * @param {number} value 
	 */
	addIndex(index: number, value: number): void {
		if (index !== 0) {
			if (index < 0 || index >= this.count) {
				console.log('Index cannot be less than 0 or greater than or equal to number of elements in linked list.');
				return;
			}
		}
		if (this.root === null) {
			this.addInitial(value); 
			this.increment();
			return;
		}
		
		let nodeCursor: any = this.root;
		for (let i = 0; i < this.count; i++) {
			let currentNode = nodeCursor;
			let nextNode = nodeCursor.props.next;
			if (i === index) {
				let newNode = <Node value={value} next={nextNode}/>;
				currentNode.props.next = newNode;
				this.increment();
			} else {
				nodeCursor = nodeCursor.props.next;
			}
		}
		console.log(this.count);
	}
}