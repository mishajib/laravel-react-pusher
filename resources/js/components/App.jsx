import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    componentDidMount() {
        console.log("Mounted component message");
        this.initListener();
    }

    initListener() {
        Echo.private('testChannel')
            .listen('TestEvent', (e) => {
                console.log(e);
            });
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
