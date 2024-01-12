import React, { Component } from "react";
import { Table } from 'antd';


class Leavedetails extends Component {
	constructor(props){
		super(props);
		this.state = {
			showTable: null,
			data:[
        {id:1, ApplyDate:'05 May 2023', Duration: '2', LeaveType: 'Sick Leave', Status: 'Approved', Reason: 'Medical'},
        {id:2, ApplyDate:'10 Jun 2023', Duration: '2', LeaveType: 'Paid Leave', Status: 'Pending', Reason: 'Vacation'},
        {id:3, ApplyDate:'20 Aug 2023', Duration: '3', LeaveType: 'Paid Leave', Status: 'Approved', Reason: 'Family reasons'},
        ],
	
        };
        
    }
        render(){

            const { data } = this.state
            const columns = [
                
              {
                title: 'Apply Date',
                dataIndex: 'ApplyDate',
            },
            {
                title: 'Duration (Days)',
                dataIndex: 'Duration'
            },
            {
                title: 'Leave Type',
                dataIndex: 'LeaveType'
            },
            {
                title: 'Status',
                dataIndex: 'Status'
            },
            {
                title: 'Reason',
                dataIndex: 'Reason'
            },
                  
        
            ]
    
            return(
               
                           <Table className="table-striped"
														style = {{overflowX : 'auto'}}
														columns={columns}                 
														// bordered
														dataSource={data}
														rowKey={record => record.id}
														pagination={false} 
														/>
                                             
            )
        }

    }
    
  export default Leavedetails;