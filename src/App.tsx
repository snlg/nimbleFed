import * as React from "react";

export interface AppProps { name: string; say: string; }

// 'AppProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppProps, {}> {
  render() {
    return <h1>{this.props.name} say {this.props.say}!</h1>;
  }
}