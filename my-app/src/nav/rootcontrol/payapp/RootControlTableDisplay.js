import React from "react";

export default function TableDisplay({ table }){
    return (
                <tbody>
                    <tr className="tables-row">
                        <td>{table.FACILITYID}</td>
                        <td>{table.DATA}</td>
                        <td>{table.GUARANTEE}</td>
                        {/* <td>{table.LENGTH-TREATED}</td> */}
                        <td>{table.RATE}</td>
                        <td>{table.COST}</td>
                    </tr>

                </tbody>
    )
}