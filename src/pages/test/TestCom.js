import React, {  useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import EditableCell from "./TestChildren";
const EditableContext = React.createContext(null);




  const  DF= [
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1',
    },
  ];
const  EditableTable =()=> {
    useEffect(()=>{
        // console.log( Form.useForm())
    })
    const [dataSource,setDataSource]=useState(DF);
    const [   count,setCount]=useState(2);
    //  const [form] = Form.useForm();
    //  console.log(form)
    const columns = [
        {
          title: 'name',
          dataIndex: 'name',
          width: '30%',
          editable: true,
        },
        {
          title: 'age',
          dataIndex: 'age',
        },
        {
          title: 'address',
          dataIndex: 'address',
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          render: (_, record) =>
          dataSource.length >= 1 ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a>Delete</a>
              </Popconfirm>
            ) : null,
        },
      ];
    const EditableRow = ({ index, ...props }) => {
       
        return (
          <Form 
          form={Form.create()} 
          component={false}>
            <EditableContext.Provider value={Form.create()}>
              <tr {...props} />
            </EditableContext.Provider>
          </Form>
        );
      };
    const  handleDelete = (key) => {
      const dd=dataSource.filter((item) => item.key !== key)
     setDataSource(dd)
      
     };
    const  handleAdd = () => {
   
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: '32',
        address: `London, Park Lane no. ${count}`,
      };
      setDataSource( [...dataSource, newData]);
      setCount( count + 1)
     
    };
    const  handleSave = (row) => {
      const newData = [dataSource];
      const index = newData.findIndex((item) => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...row });
      setDataSource(newData)
     
    };
   const components = {
        body: {
        //   row: EditableRow ,
        //   cell: EditableCell ,
        },
      };
    const columnsF = columns.map((col) => {
        if (!col.editable) {
          return col;
        }
  
        return {
          ...col,
          onCell: (record) => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: handleSave,
          }),
        };
      });
      return (
        <div>
          <Button
            onClick={handleAdd}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            Add a row
          </Button>
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columnsF}
          />
        </div>
      );
    }

// const EditableTable=(props)=>{
//     return(
//         <div>dddd</div>
//     )
// }
  
  export default EditableTable;