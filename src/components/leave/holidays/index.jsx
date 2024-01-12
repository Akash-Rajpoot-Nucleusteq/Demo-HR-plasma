import React, { Component } from "react";
import { Table } from 'antd';

class Holiday extends Component {
    constructor(props){
        super(props);
        this.state = {
            showTable: null,
            data:[
                { Date: '01 Jan 2024', HolidayName: 'New Year'},
                { Date: '14 Feb 2024', HolidayName: 'Valentine\'s Day'},
                { Date: '25 Dec 2024', HolidayName: 'Christmas'},
            ],
        };
    }

    render(){
        const { data } = this.state;
        const columns = [
           
            {
                title: 'Date',
                dataIndex: 'Date'
            },
            {
                title: 'Holiday Name',
                dataIndex: 'HolidayName'
            },
        ];

        return (
            <Table
                className="table-striped"
                style={{ overflowX: 'auto' }}
                columns={columns}                 
                dataSource={data}
                rowKey={record => record.id}
                pagination={false} 
            />
        );
    }
}

export default Holiday;
