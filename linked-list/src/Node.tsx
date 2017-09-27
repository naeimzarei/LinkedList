import * as React from 'react';
import './Node.css';

/*
 * It is necessary to make the props of type any
 * to prevent TypeScript errors from happening
 * when nesting Node elements. 
 */
export default class Node extends React.Component<any, {}> {
	constructor() {
		super();
	}

	render() {
		if (this.props.next !== null) {
			return (
				<div>
					<div className="node">
						{this.props.value}
					</div>
					{this.props.next}
				</div>
			);
		} else {
			return null;
		}
	}
}