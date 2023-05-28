import React from 'react'
import { useEffect, useState } from "react";
import schema from '../assets/schema.json'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Checkbox from '@mui/material/Checkbox';
import { FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function StepTwo() {
    const data = schema.channels
    const [reference, setReference] = useState(Array(data.length).fill(' '))
    const [isOpen, setIsOpen] = useState(Array(data.length).fill(false))
    const [backup, setBackup] = useState(Array(data.length).fill(Array(1).fill(" ")))
    const [opt, setOpt] = useState(schema.optionals[0])
    const keys = Object.keys(schema.optionals[0])
    const [value, setValue] = useState([])

    useEffect(() => {
        let temp = []
        keys.forEach((key, index) => {
            temp.push(opt[key])
        });
        setValue([...temp])
    }, [])

    const handleCheck = (ind) => {
        let temp = []
        for (let i = 0; i < value.length; i++) {
            if (i !== ind) temp.push(value[i])
            else temp.push(!value[i])
        }
        setValue(temp)
    }

    const handleRef = (ind, val) => {
        let temp = []
        for (let i = 0; i < data.length; i++) {
            if (i === ind) temp.push(val)
            else temp.push(reference[i])
        }
        setReference(temp)
    }

    const toggleBackup = (ind) => {
        let temp = []
        for (let i = 0; i < data.length; i++) {
            if (i === ind) temp.push(!isOpen[i])
            else temp.push(isOpen[i])
        }
        setIsOpen(temp)
    }

    const addBackup = (ind) => {
        let temp = []
        for (let i = 0; i < data.length; i++) {
            if (i === ind) {
                let temp2 = [...backup[i]]
                temp2.push(" ")
                temp.push(temp2)
            }
            else temp.push(backup[i])
        }
        setBackup(temp)
    }

    const deleteBackup = (ind, index) => {
        let temp = []
        for (let i = 0; i < backup.length; i++) {
            temp.push([...backup[i]])
            if (i === ind) {
                if (backup[i].length > 1) temp[ind].splice(index, 1)
                else temp[i][index] = " "
            }
        }
        setBackup(temp)
    }

    const handleBackup = (x, y, val) => {
        let temp = []
        for (let i = 0; i < backup.length; i++) {
            if (i !== x) temp.push([...backup[i]])
            else {
                let temp2 = [...backup[i]]
                temp2[y] = val
                temp.push([...temp2])
            }
        }
        setBackup(temp)
    }

    function returnCount(ind) {
        let c = 0
        for (let i = 0; i < backup[ind].length; i++) {
            if (backup[ind][i] !== ' ') c++
        }
        return c
    }

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650, background: '#F5F6FA', borderCollapse: 'separate', borderSpacing: '0px 40px', }} aria-label="simple table">
                {/* first row in light blue color */}
                <TableHead>
                    <TableRow sx={{ background: '#E5F3FF', borderRadius: '3px', margin: '10px 5px' }}>
                        <TableCell align='center' sx={{ borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px' }}>Channel</TableCell>
                        <TableCell align='center'>Primary Channel</TableCell>
                        <TableCell align='center'>Reference Channel</TableCell>
                        <TableCell align='center' sx={{ borderTopRightRadius: '3px', borderBottomRightRadius: '3px' }}> </TableCell>
                    </TableRow>
                </TableHead>

                {/* remaining rows of table */}
                <TableBody>
                    {data.map((row, ind) => (
                        <>
                            <TableRow
                                key={row.name}
                                sx={{ background: '#fff', borderRadius: '8px', padding: '2px' }}
                            >
                                {/* channel name column */}
                                <TableCell align='center' sx={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', padding: '15px 0px', marginLeft: '8px', fontWeight: 'bold' }}>
                                    {reference[ind] !== ' ' ? data[ind] + ' : ' + reference[ind] : data[ind]}
                                </TableCell>

                                {/* primary channel column */}
                                <TableCell align='center' sx={{ padding: '15px 0px' }}>
                                    <Box>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
                                            <Select
                                                id="primary"
                                                value={row}
                                                autoWidth
                                            >
                                                {data.map(i => {
                                                    return <MenuItem key={i} value={i}>{i}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </TableCell>

                                {/* reference channel column */}
                                <TableCell align='center' sx={{ padding: '15px 0px' }}>
                                    <Box>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} >
                                            <Select
                                                labelId="reference-label"
                                                id="reference"
                                                value={reference[ind]}
                                                onChange={(event) => handleRef(ind, event.target.value)}
                                                autoWidth
                                            >
                                                <MenuItem key={'N/A'} value={' '} selected={true}>N/A</MenuItem>
                                                {data.map(i => {
                                                    return <MenuItem key={i} value={i}>{i}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </TableCell>

                                {/* column for button to view/add/hide backup channel(s) */}
                                <TableCell align='center' sx={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px', padding: '15px 0px' }}>
                                    {isOpen[ind] ?
                                        <Link sx={{ cursor: 'pointer' }} underline="hover" onClick={() => toggleBackup(ind)}>Hide Backup Channels</Link>
                                        : backup[ind].length === 1 && backup[ind][0] === ' ' ? <Link onClick={() => toggleBackup(ind)} underline='none' sx={{ cursor: 'pointer', border: '1.5px solid blue', padding: '10px 15px', borderRadius: '8px' }}>+ Add backup channels</Link>
                                            : <Link sx={{ cursor: 'pointer' }} underline="hover" onClick={() => toggleBackup(ind)}>View Backup Channels ({returnCount(ind)})</Link>}
                                </TableCell>
                            </TableRow>
                            
                            {/* show backup row only if isOpen for that index is true */}
                            {isOpen[ind] && <>
                                {backup[ind].map((ele, index) => {
                                    return <TableRow sx={{ background: '#F6F6F6', borderRadius: '8px', padding: '0px 0px', position: 'relative', top: '-40px' }}>
                                        <TableCell sx={{ borderBottom: 'none', borderCollapse: 'collapse', padding: '0px' }} align='center'></TableCell>

                                        <TableCell sx={{ borderBottom: 'none', borderCollapse: 'collapse', padding: '0px' }} align='center'>
                                            <Box>
                                                <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
                                                    <Select
                                                        id="backup-1"
                                                        value={ind}
                                                        autoWidth
                                                    >
                                                        {data.map((i, index) => {
                                                            return <MenuItem key={index} value={index}>{reference[index] !== ' ' ? i + ' : ' + reference[index] : i}</MenuItem>
                                                        })}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </TableCell>

                                        <TableCell sx={{ borderBottom: 'none', borderCollapse: 'collapse', padding: '0px' }} align='center'>
                                            <Box>
                                                <FormControl sx={{ m: 1, minWidth: 120 }} >
                                                    <Select
                                                        id="backup-2"
                                                        value={backup[ind][index]}
                                                        onChange={(event) => handleBackup(ind, index, event.target.value)}
                                                        // value={reference[ind]}
                                                        // onChange={(event) => handleRef(ind, event.target.value)}
                                                        autoWidth
                                                    >
                                                        <MenuItem key={'NULL'} value={' '} selected={true}>NULL</MenuItem>
                                                        {data.map((i, index) => {
                                                            return <MenuItem key={index} value={index}>{reference[index] !== ' ' ? i + ' : ' + reference[index] : i}</MenuItem>
                                                        })}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </TableCell>

                                        <TableCell sx={{ borderBottom: 'none', borderCollapse: 'collapse', padding: '0px' }} align='center'>
                                            <Link onClick={() => deleteBackup(ind, index)} color="#ff0000" underline='hover' fontWeight={'bold'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><DeleteOutlineIcon /> Delete</Link>
                                        </TableCell>
                                    </TableRow>
                                })}

                                <TableRow sx={{ background: '#F6F6F6', borderRadius: '8px', padding: '2px', position: 'relative', top: '-80px', border: 'none' }}>
                                    <TableCell align='center'></TableCell>
                                    <TableCell align='center'><Link onClick={() => addBackup(ind)} underline='hover' sx={{ cursor: 'pointer' }}>+ Add backup channels</Link></TableCell>
                                    <TableCell align='center'></TableCell>
                                    <TableCell align='center'></TableCell>
                                </TableRow>
                            </>}
                        </>
                    ))}
                </TableBody>
            </Table>

            {/* table for optionals */}
            <Table>
                <TableBody>
                    <TableRow sx={{ background: '#fff' }}>
                        <TableCell align='center'>Additional Settings</TableCell>
                        {/* new cell for each option */}
                        {value.map((ele, ind) => {
                            return <TableCell align='center'>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox
                                        checked={value[ind]}
                                        onChange={() => handleCheck(ind)}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />} label={keys[ind]} />
                                </FormGroup>
                            </TableCell>
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}