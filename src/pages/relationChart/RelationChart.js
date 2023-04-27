import React from "react";
import RelationChartCom from "../components/realtionChart/index";


class RelationChart extends React.Component {
    render() {

        const relationChartObj = {
            id: "relationChartObj1",
            height: "800px",
            data: {
                nodes: [

                    {
                        id: 'root',
                        text: 'Root',
                        endpoints: [{
                            id: 'root-1',
                            // orientation: [0, 0],
                            // pos: [0.5, 1],
                            color: 'system-green',
                            typeFlag: "end",
                        }]
                    },
                    {
                        id: 'test',
                        text: 'Test',
                        endpoints: [
                            {
                                id: 'test-1',
                                // orientation: [0, -1],
                                // pos: [0.5, 0],
                                color: 'system-green',
                                typeFlag: "start",
                            },
                            {
                                id: 'test-2',
                                // orientation: [0, 0],
                                // pos: [0.2, 0.9],
                                color: 'system-green',
                                content: "222",
                                typeFlag: "normal",
                                data: [
                                    {
                                        id: "111",
                                        name: "111",
                                    },
                                    {
                                        id: "222",
                                        name: "222",
                                    },
                                ]
                            },

                            {
                                id: 'test-3',
                                // orientation: [0, 0],
                                // pos: [0.8, 0.9],
                                color: 'system-green',
                                content: "222",
                                typeFlag: "normal",
                                data: [
                                    {
                                        id: "333",
                                        name: "333",
                                    },
                                    {
                                        id: "444",
                                        name: "444",
                                    },
                                ]
                            },
                            {
                                id: 'test-4',
                                // orientation: [0, 0],
                                // pos: [0.5, 1],
                                color: 'system-green',
                                typeFlag: "down",
                            },
                        ]
                    },
                    {
                        id: 'title',
                        text: 'Title',
                        endpoints: [{
                            id: 'title-1',
                            // orientation: [0, -1],
                            // pos: [0.5, 0],
                            color: 'system-green',
                            typeFlag: "start",
                        }, {
                            id: 'title-2',
                            // orientation: [0, 0],
                            // pos: [0.2, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'title-3',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "777",
                            data: [
                                {
                                    id: "888",
                                    name: "888",
                                },
                                {
                                    id: "999",
                                    name: "999",
                                },
                            ]
                        },
                        {
                            id: 'title-4',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "down",

                        }
                        ]
                    },
                    {
                        id: 'txt',
                        text: 'Txt',
                        endpoints: [{
                            id: 'txt-1',
                            // orientation: [0, -1],
                            // pos: [0.5, 0],
                            color: 'system-green',
                            typeFlag: "start",
                        },
                        {
                            id: 'txt-2',
                            // orientation: [0, 0],
                            // pos: [0.2, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'txt-3',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'txt-5',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'txt-6',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'txt-4',
                            // orientation: [0, 0],
                            // pos: [0.5, 1],
                            color: 'system-green',
                            typeFlag: "down",
                        }
                        ]
                    },
                    {
                        id: 'fly',
                        text: 'Fly',
                        endpoints: [{
                            id: 'fly-1',
                            // orientation: [0, -1],
                            // pos: [0.5, 1],
                            color: 'system-green',
                            typeFlag: "start",
                        }]
                    }],

                edges: [
                    {
                        source: 'root-1',
                        target: 'test-1',
                        sourceNode: 'root',
                        targetNode: 'test',
                        type: 'endpoint',

                    },
                    {
                        source: 'root-1',
                        target: 'txt-1',
                        sourceNode: 'root',
                        targetNode: 'txt',
                        type: 'endpoint',

                    },
                    {
                        source: 'test-3',
                        target: 'title-1',
                        sourceNode: 'test',
                        targetNode: 'title',
                        type: 'endpoint',

                    },
                    {
                        source: 'txt-2',
                        target: 'title-1',
                        sourceNode: 'txt',
                        targetNode: 'title',
                        type: 'endpoint',

                    },
                    {
                        source: 'title-4',
                        target: 'fly-1',
                        sourceNode: 'title',
                        targetNode: 'fly',
                        type: 'endpoint',

                    }
                ]
            },
        }
        return (
            <div>
                <RelationChartCom  {...relationChartObj}/>
            </div>
        )
    }
}

export default RelationChart;