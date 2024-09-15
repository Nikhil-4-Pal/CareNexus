import React, { useMemo } from 'react'
import {useTable} from 'react-table'
import BedStatus from '../../Profile/mock data/BedStatus.json'
import { ColumnBedStatus } from './BedStatusHeading'


function StatusTable() {

  const Columns = useMemo(()=>ColumnBedStatus,[])
  const Data = useMemo(()=>BedStatus,[])


  const tableInstance = useTable({
    columns : Columns,
    data : Data
  })

  const { 
    getTableProps,
    getTableBodyProps,
    rows,
    headerGroups,
    prepareRow} = tableInstance


  return (
    <table  className='p-4 m-4 w-[95%] bg-black/30 text-white   rounded-2xl text-center  h-full  ' {...getTableProps()} >
        <thead className=' sticky top-0  ' >
          {
            headerGroups.map((headergroup)=>{
              return( <tr className=' bg-black rounded-3xl ' {...headergroup.getFooterGroupProps()} >
                {headergroup.headers.map((column)=>{
                  return(<th className='  sticky top-0   ' {...column.getHeaderProps()} >
                    {column.render('Header')}
                  </th>)
                })}
                
            </tr>)
            })
          }
           
        </thead>
        <tbody {...getTableBodyProps()} >
          {
            rows.map((row)=>{
              prepareRow(row)
              return(
                <tr {...row.getRowProps()} >
                  {
                    row.cells.map((cell)=>{
                      return(
                        <td className=' border-x-2 border-black ' {...cell.getCellProps()} >
                          {cell.render('Cell')}
                        </td>
                      )
                    })
                  }
                  
                </tr>
              )
            })
          }
            
        </tbody>
    </table>
  )
}

export default StatusTable