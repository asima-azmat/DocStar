import React from 'react';

var tabData = [
    { name: 'Tab 1', isActive: true },
    { name: 'Tab 2', isActive: false },
    { name: 'Tab 3', isActive: false }
];
class Tabs extends Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                {tabData.map(function(tab){
                    return (
                        <Tab data={tab} isActive={this.props.activeTab === tab} handleClick={this.props.changeTab.bind(this,tab)} />
                    );
                }.bind(this))}
            </ul>
        );
    }
}

class Tab extends Component {
    render() {
        return (
            <li onClick={this.props.handleClick} className={this.props.isActive ? "active" : null}>
                <a href="#">{this.props.data.name}</a>
            </li>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                {this.props.activeTab.name === 'Tab 1' ?
                    <section className="panel panel-success">
                        <h2 className="panel-heading">Content 1</h2>
                        <p className="panel-body">Para 1</p>
                    </section>
                    :null}
                {this.props.activeTab.name === 'Tab 2' ?
                    <section className="panel panel-warning">
                        <h2 className="panel-heading">Content 2</h2>
                        <p className="panel-body">Para 2</p>
                    </section>
                    :null}
                {this.props.activeTab.name === 'Tab 3' ?
                    <section className="panel panel-danger">
                        <h2 className="panel-heading">Content 3</h2>
                        <p className="panel-body">Para 3</p>
                    </section>
                    :null}
            </div>
        );
    }
}

class App extends Component {
    getInitialState() {
        return {
            activeTab: tabData[0]
        }
    }
    handleClick(tab) {
        this.setState({activeTab: tab});
    }
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} changeTab={this.handleClick} />
                <Content activeTab={this.state.activeTab} />
            </div>
        );
    }
}
React.render(
    <App />,
    document.getElementById('app')
);