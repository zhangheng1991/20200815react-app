import React from "react";

import AceEditor from "react-ace";
import vkbeautify from "vkbeautify";


class AecComponent extends React.Component {
    state = {
        value: ""
        ,
    }
    value = ""

    // IsXml(str) {

    //     var xmlDoc = null;
    //     try //Internet Explorer
    //     {
    //         xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //         xmlDoc.async = false;
    //         xmlDoc.loadXML(str);
    //     }
    //     catch (e) {
    //         try //Firefox, Mozilla, Opera, etc.
    //         {
    //             xmlDoc = document.implementation.createDocument("", "", null);
    //             xmlDoc.async = false;
    //             xmlDoc.load(str);
    //         }
    //         catch (e) { alert(e.message) }
    //         console.log(e,"E")
    //     }
    //     return (xmlDoc.xml != "");
    // }


    onChange(newValue) {
        // const {hadnclick}=this.props;
        const that = this;
        // this.IsXml(newValue)
        console.log(that, "change", newValue);
        console.log(vkbeautify.xml(newValue), "newValue")
        // this.value=vkbeautify.xml(newValue);
        this.setState({ value: vkbeautify.xml(newValue) })
        // hadnclick(vkbeautify.xml(newValue))
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <AceEditor
                    width="100%"
                    value={value}
                    defaultValue="yyyyyy"
                    mode="xml"
                    showPrintMargin={false}
                    // maxLines="0"
                    // minLines="0"
                    // theme="github"
                    onChange={this.onChange.bind(this,)}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true
                    }}
                />
            </div>
        )
    }
}

export default AecComponent;


