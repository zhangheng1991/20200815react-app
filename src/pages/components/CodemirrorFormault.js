import React from "react";
// import { UnControlled as CodeMirror } from 'react-codemirror2'
import { Controlled as CodeMirror } from 'react-codemirror2'



class CodemirrorFormault extends React.Component {
    state={
        value:'',
    }
    render() {
        return (
            <div>
                {/* dddd
                <CodeMirror
                    // value='<h1>I ♥ react-codemirror2</h1>'
                    options={{
                        mode: 'xml',
                        theme: 'material',
                        lineNumbers: true
                    }}
                    onChange={(editor, data, value) => {
                    }}
                /> */}
                <CodeMirror
                    value={this.state.value}
                    options={{
                        mode: 'xml',
                        theme: 'material',
                        lineNumbers: true
                      }}
                    onBeforeChange={(editor, data, value) => {
                        this.setState({ value });
                    }}
                    onChange={(editor, data, value) => {
                    }}
                />
            </div>
        )
    }
}

export default CodemirrorFormault;