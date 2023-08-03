// import React from 'react';
// import MonacoEditor from 'react-monaco-editor';
// // import { get_rule_function } from '../../services/api.js';


// class DEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tipList: [],     // 储存计算框提示语的首字母
//       suggestions: [], // 储存提示语
//       calculateValue: '',
//     };
//   }

//   componentWillMount() {
//     // 拦截判断是否离开当前页面
//     window.addEventListener('beforeunload', this.beforeunload);
//   }

//   componentDidMount() {
//     this.setState({
//       calculateValue: this.props.calculateValue
//     })
//   }

//   componentWillReceiveProps(nextProps) {
//     if (this.state.calculateValue !== nextProps.calculateValue) {
//       this.setState({
//         calculateValue: nextProps.calculateValue,
//       })
//     }
//   }

//   beforeunload() {
//     // 如果是刷新页面 清空sessionStorage
//     sessionStorage.removeItem('isLoadDEditor');
//   }

//   // 自定义按键提示的数据请求
// //   requestList = async () => {
// //     const list = [];
// //     const tipList = [':'];
// //     const res = await get_rule_function()
// //     if (res.data.responseCode) return
// //     const responseData = res.data.responseData;
// //     responseData.map(item => {
// //       const obj = {};
// //       obj.label = item.content;
// //       obj.insertText = item.content;
// //       obj.detail = item.symbolName;
// //       list.push(obj);
// //       tipList.push(item.content.substring(0, 1));
// //       return null;
// //     })
// //     this.setState({
// //       suggestions: list,
// //       tipList: tipList
// //     }) 
// //   }

//   onBlur = () => {
//     const { calculateValue } = this.state;
//     this.props.value(calculateValue);
//     if (calculateValue) {
//       this.props.isEditorErrFn(false);
//     }
//   };

//   onChangeHandle = (value, e) => {
//     this.setState({
//       calculateValue: value
//     });
//   }

//   editorDidMountHandle = async (editor, monaco) => {
//     // sessionStorage记录当前我是否来过这个页面 也就是说 是否加载执行过  monaco.languages.registerCompletionItemProvider 
//     // 执行过就不再执行 当页面关闭就重新记录 因为多次执行了这个方法导致重复数据
//     const isLoadDEditor = sessionStorage.getItem('isLoadDEditor');
//     // console.log(isLoadDEditor)
   
//   };

//   options = {
//     selectOnLineNumbers: true,
//     renderSideBySide: false
//   };

//   render() {
//     return (
//       <div onBlur={this.onBlur}>
//         <MonacoEditor
//           ref="monaco"
//           width="900"
//           height="200"
//           language="plaintext"
//           theme="vs-dark"
//           value={this.state.calculateValue}
//           options={this.options}
//           onChange={this.onChangeHandle}
//         //   editorDidMount={this.editorDidMountHandle}
//         />
//       </div>
//     )
//   }
// }

// export default DEditor;

import React from 'react';
// import { createRoot } from "react-dom/client";
// import MonacoEditor from 'react-monaco-editor';
import MonacoEditor from 'react-monaco-editor';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="100%"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default App;

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);