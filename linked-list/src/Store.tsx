import * as React from 'react';
import { observable, action } from 'mobx';

export default class Store extends React.Component {
	// the root linked list node 
	@observable root: any = null;
	// set the root linked list node 
	@action.bound setRoot(root: any): void {
		this.root = root;
	}
}