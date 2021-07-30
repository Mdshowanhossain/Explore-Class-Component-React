import React, { Component } from 'react'
import ReactTable from 'react-table';
// import "react-table/react-table.css";



export default class Table extends Component {



    render() {

        const col = []

        const tableColumns = [{ Header: "Name", accessor: " " }, { Header: " Age", accessor: " " }]


        return (
            <div>
                <ReactTable
                    data={col}
                    columns={tableColumns}
                    defaultPageSize={2}
                    pageSizeOptions={[2, 4, 6, 8, 10]}
                />

            </div>
        )
    }
}
