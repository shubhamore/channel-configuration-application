import React from 'react'
import { useContext } from "react";
import { Data } from '../../context/Context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import Notification from '../../components/Notification'

export default function StepThree({ handleBack, submitted = false }) {
    const { data } = useContext(Data)
    const { reference } = useContext(Data)
    const { backup } = useContext(Data)
    const { keys } = useContext(Data)
    const { value } = useContext(Data)

    function returnCount(ind) {
        let c = 0
        for (let i = 0; i < backup[ind].length; i++) {
            if (backup[ind][i] !== ' ') c++
        }
        return c
    }

    function getOptions() {
        let temp = ""
        for (let i = 0; i < value.length; i++) {
            if (value[i]) {
                if (temp.length > 0) temp += ", "
                temp += keys[i]
            }
        }
        return temp ? temp : 'none'
    }

    return (<>
        {submitted&&<Notification/>}
        <TableContainer>
            <Table sx={{ minWidth: 650, background: '#F5F6FA', marginTop: '20px' }} aria-label="simple table">
                {/* first row in light blue color */}
                <TableHead>
                    <TableRow sx={{ background: '#E5F3FF', borderRadius: '3px', margin: '10px 5px' }}>
                        <TableCell align='center' sx={{ borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px', width: '25%' }}>Channel</TableCell>
                        <TableCell align='center'>Primary Channel</TableCell>
                        <TableCell align='center'>Reference Channel</TableCell>
                        <TableCell align='center' sx={{ borderTopRightRadius: '3px', borderBottomRightRadius: '3px', width: '25%' }}> </TableCell>
                    </TableRow>
                </TableHead>
            </Table>

            {/* remaining rows of table */}
            {data.map((ele, ind) => {
                return <table className='table'>
                    <tbody>

                    <tr className='table-row'>
                        <th className='table-head'>{reference[ind] !== ' ' ? data[ind] + ' : ' + reference[ind] : data[ind]}</th>
                        <th className='table-head'>{ele}</th>
                        <th className='table-head'>{reference[ind] !== " " ? reference[ind] : "N/A"}</th>
                        {!submitted && <th className='table-head' rowSpan={returnCount(ind) + 1}><Link component='button' disabled={submitted} onClick={() => handleBack()} underline='none' sx={{ cursor: 'pointer', border: '1.5px solid blue', padding: '10px 15px', borderRadius: '8px' }}>Edit Channel</Link></th>}
                        {submitted && <th className='table-head' rowSpan={returnCount(ind) + 1}><Link component='button' disabled={submitted} onClick={() => handleBack()} underline='none' sx={{ border: '1.5px solid #C4C4C4', color: '#C4C4C4', padding: '10px 15px', borderRadius: '8px' }}>Edit Channel</Link></th>}
                    </tr>
                    {backup[ind][0] !== " " && backup[ind].map((e, i) => {
                        if (i === 0) {
                            return <tr className='table-row'>
                                <td className='table-data' rowSpan={returnCount(ind)}>Backup Channels</td>
                                <td className='table-data'>{reference[ind] !== ' ' ? data[ind] + ' : ' + reference[ind] : data[ind]}</td>
                                <td className='table-data'>{backup[ind][i] !== " " ? reference[backup[ind][i]] !== " " ? data[backup[ind][i]] + " : " + reference[backup[ind][i]] : data[backup[ind][i]] : "NULL"}</td>
                            </tr>
                        }
                        return <tr className='table-row'>
                            <td className='table-data'>{reference[ind] !== ' ' ? data[ind] + ' : ' + reference[ind] : data[ind]}</td>
                            <td className='table-data'>{backup[ind][i] !== " " ? reference[backup[ind][i]] !== " " ? data[backup[ind][i]] + " : " + reference[backup[ind][i]] : data[backup[ind][i]] : "NULL"}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            })}

            {/* table for optionals */}
            <Table>
                <TableBody>
                    <TableRow sx={{ background: '#fff' }}>
                        <TableCell align='center' sx={{ fontWeight: '500', textAlign: 'left', borderRadius: '8px' }}>Additional Settings : {getOptions()}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
