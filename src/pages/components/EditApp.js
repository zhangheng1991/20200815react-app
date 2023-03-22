import React, { PureComponent } from 'react'
import JSONEditor from 'jsoneditor';
import xml2js from "xml2js";
import fs from "fs";
import json2xml from "json2xml"

import 'jsoneditor/dist/jsoneditor.css'

class JsonEditor extends PureComponent {

    onChange = (value) => {
        console.log(value, "value")
    }
    initJsonEditor = () => {
        const options = {
            mode: 'code',
            history: true,
            onChange: this.onChange,
            onValidationError: this.onError,
            value: "#33333"
        };

        this.jsoneditor = new JSONEditor(this.container, options)
        this.jsoneditor.set(this.props.value)
    }


    //  onChange=()=>{
    //     this.container
    //  }
    componentDidMount() {
        this.initJsonEditor()
        this.parseString();

        var convert = require('xml-js');
        // var xml =
        //     '<?xml version="1.0" encoding="utf-8"?>' +
        //     '<note importance="high" logged="true">' +
        //     '    <title>Happy</title>' +
        //     '    <todo>Work</todo>' +
        //     '    <todo>Play</todo>' +
        //     '</note>';
        // var result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
        // var result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
        // console.log(result1, "result1");
        // console.log(result2,  "result2");

        // var convert = require('xml-js');
        // var json = require('fs').readFileSync('test.json', 'utf8');
        // var options = { compact: true, ignoreComment: true, spaces: 4 };
        // var result = convert.json2xml(json, options);
        // console.log(result);
        // console.log(fs,"fs")

        var data = '{"Data":{"SOM":{"Tab":[{"Values":{"SelectedValues":null,"LoadedValues":null,"ExpandedValues":null,"ID":"msorgrole"},"ID":"OrgRole"},{"Values":{"SelectedValues":null,"LoadedValues":null,"ExpandedValues":null,"ID":"msorg"},"ID":"Organization"},{"Values":{"SelectedValues":null,"LoadedValues":null,"ExpandedValues":null,"ID":"mscontenttype"},"ID":"PeopleType"},{"Values":{"SelectedValues":",B79720D5-0E95-4CB7-B4F9-37BE24696F4F,831A2A77-B758-493A-B0F4-991A6427C31C,","LoadedValues":null,"ExpandedValues":null,"ID":"mspeople"},"ID":"People"}]}}}';

        var jsonObj = JSON.parse(data); // important to first convert json string into object
        console.log(jsonObj,"jsonObj")
        console.log((json2xml(jsonObj)),"(json2xml(jsonObj))")
        const ddt=json2xml(jsonObj);
        var result1 = convert.xml2json(ddt, { compact: true, spaces: 4 });
        console.log(data,result1,"result1")
    }

    componentWillUnmount() {
        if (this.jsoneditor) {
            this.jsoneditor.destroy()
        }
    }
    parseString = () => {
        const xml = "<root>hello xml2js!</root?";
        xml2js.parseString(xml, function (err, result) {
            // console.log(result, "result")
        })
        const dd = xml2js.parseString(xml);
        // console.log(dd, "dd")
    }

    data = [{
        "lat": "32.71883",
        "lon": "-16.76118",
        "ele": "0"
    }, {
        "lat": "32.71882",
        "lon": "-16.76138",
        "ele": "0"
    }, {
        "lat": "32.71881",
        "lon": "-16.76159",
        "ele": "0"
    }, {
        "lat": "32.71880",
        "lon": "-16.76179",
        "ele": "0"
    }, {
        "lat": "32.71879",
        "lon": "-16.76199",
        "ele": "0"
    }, {
        "lat": "32.71878",
        "lon": "-16.76220",
        "ele": "0"
    }]

    data1 = {
        ddd: "@222"
    }



    toXml = (data) => {
        return data.reduce((result, el) => {
            return result + `<trkpt lat="${el.lat}" lon="${el.lon}"><ele>${el.ele}</ele></trkpt>\n`
        }, '')
    }



    render() {
        // console.log(this.container, "this.container")
        console.log(this.toXml(this.data), "data")
        console.log(fs, "fs")
        return <div className="jsoneditor-react-container" id="jsoneditor-react-container" ref={elem => this.container = elem} />
    }
}
export default JsonEditor