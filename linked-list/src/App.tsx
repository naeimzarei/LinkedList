import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Store from './Store';

interface AppProps {
	store: Store;
}

interface AppState {}

@observer
export default class App extends React.Component<AppProps, AppState> {
	constructor() {
		super();
	}

	render() {
		this.props.store.addLast(4);
		this.props.store.addLast(5);
		this.props.store.addLast(-1);
		this.props.store.addLast(9);
		this.props.store.addIndex(0, 0);
		this.props.store.addIndex(0, 43);
		this.props.store.addIndex(0, 84);
		this.props.store.addIndex(1, 44);
		this.props.store.removeFirst();
		this.props.store.removeLast();
		this.props.store.removeLast();
		this.props.store.removeLast();
		this.props.store.removeLast();
		this.props.store.addLast(10);
		this.props.store.addLast(12);
		this.props.store.addLast(14);
		this.props.store.addLast(15);
		this.props.store.addLast(19);
		this.props.store.removeIndex(4);
		this.props.store.removeIndex(0);
		this.props.store.removeIndex(2);
		this.props.store.addFirst(39);
		return (
			<div>
				{this.props.store.root}
			</div>
		);
	}
}