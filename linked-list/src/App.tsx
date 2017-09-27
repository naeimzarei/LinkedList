import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Store from './Store';
import Node from './Node';

interface AppProps {
	store: Store;
}

interface AppState {}

@observer
export default class App extends React.Component<AppProps, AppState> {
	constructor() {
		super();
	}

	/**
	 * Add node to linked list
	 * @param {Number} value
	 * @return
	 */
	addNode(value: Number) {
		if (this.props.store.root === null) {
			this.props.store.setRoot(<Node value={value} next={null}/>);
			return;
		} 
		let nodeCursor: any = this.props.store.root;
		while (nodeCursor.props.next !== null) {
			nodeCursor = nodeCursor.props.next;
		}
		nodeCursor.props.next = <Node value={value} node={null}/>;
		console.log(nodeCursor.props.value);
	}

	render() {
		this.addNode(4);
		this.addNode(5);
		return (
			<div>
				{this.props.store.root}
			</div>
		);
	}
}