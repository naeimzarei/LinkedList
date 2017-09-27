import * as React from 'react';
import { observable, action } from 'mobx';
import Node from './Node';

export default class Store extends React.Component {
	// the root linked list node
	@observable root: any = null;
	// the number of nodes in linked list
	@observable count: number = 0;
	// increment count by 1
	@action.bound increment(): void {
		this.count++;
	}
	// decrement count by 1
	@action.bound decrement(): void {
		this.count--;
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
	//  getNodeIndex(index: number): Node {
	//  }

	/**
	 * Obtain node given value
	 * @param {number} value
	 */
	// getNodeValue(value: number) {

	// }

	/**
	 * Add a node at the root level
	 * @param {number} value 
	 */
	addFirst(value: number): void {
		// there are no nodes
		if (this.count === 0) {
			this.setRoot(<Node value={value} next={null}/>);
		} else if (this.count === 1) {
			this.setRoot(<Node value={value} next={null}/>);
		} else {
			let newNode = <Node value={value} next={this.root}/>;
			this.setRoot(newNode);
		}
	}

	/**
	 * Adds node to end of linked list
	 * @param value
	 */
	addLast(value: number): void {
		if (this.root === null) {
			this.addInitial(value); 
			this.increment();
			return;
		}
		let nodeCursor: any = this.root;
		while (nodeCursor.props.next !== null) {
			nodeCursor = nodeCursor.props.next;
		}
		nodeCursor.props.next = <Node value={value} next={null} />;
		this.increment();
	}

	/**
	 * Add node to linked list at given index
	 * @param {number} index
	 * @param {number} value
	 */
	addIndex(index: number, value: number): void {
		if (index < 0 || index > this.count) {
			console.log('Index cannot be less than 0 or greater than or equal to number of elements in linked list.');
			return;
		}
		if (this.root === null) {
			this.addInitial(value);
			this.increment();
			return;
		}

		let nodeCursor = this.root;
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
	}

	/**
	 * Remove the root node
	 */
	removeFirst(): void {
		// there are no nodes
		if (this.count === 0) {
			console.log('There are no nodes to remove from linked list.');
			return;
		} else if (this.count === 1) {
			this.setRoot(null);
			this.decrement();
		} else {
			this.setRoot(this.root.props.next);
			this.decrement();
		}
	}

	/**
	 * Remove the last node
	 */
	removeLast(): void {
		if (this.count === 0) {
			console.log('There are no nodes to remove from linked list.');
			return;
		} else if (this.count === 1) {
			this.setRoot(null);
			this.decrement();
		} else {
			let nodeCursor = this.root;
			let previousNode = null;
			while (nodeCursor.props.next !== null) {
				previousNode = nodeCursor;
				nodeCursor = nodeCursor.props.next;
			}
			previousNode.props.next = null;
			this.decrement();
		}
	}

	/**
	 * Remove node at given index.
	 * @param {number} index
	 */
	removeIndex(index: number): void {
		console.log(this.count);
		if (index === 0) {
			this.removeFirst();
			return;
		}

		if (index < 0 || index > this.count) {
			console.log('Index cannot be less than 0 or greater than number of elements in linked list.');
			return;
		}
		if (this.count === 0) {
			console.log('There are no nodes to remove from linked list.');
			return;
		}

		if (this.count === 1) {
			this.removeFirst();
			return;
		}

		if (index === (this.count - 1)) {
			console.log('Deleting last node.');
			this.removeLast();
			return;
		}

		let nodeCursor = this.root;
		let previousNode;
		for (let i = 0; i < this.count; i++) {
			let nextNode = nodeCursor.props.next;
			if (i === index) {
				previousNode.props.next = nextNode;
				this.decrement();
			} else {
				previousNode = nodeCursor;
				nodeCursor = nodeCursor.props.next;
			}
		}
	}
}