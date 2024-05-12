import React from "react";
import axios from "axios"
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";


export const Table = styled.table`
    width: 350px;
    padding: 10px;
    background-color: rgba(255,255,255,0.3);
    border: 2px solid white;
    border-radius: 20px;
`;

export const Thead = styled.thead`
    margin-bottom:30px;
`;

export const Tr = styled.tr`
    color: white
`;

export const Th = styled.th`
    text-align: start;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    padding: 5px;
    font-size: 1.25rem;
    margin-bottom: 30px;
`;

export const Tbody = styled.tbody`

`;

export const Td = styled.td`
    padding: 20px 0px;
    font-size: 1.2rem;

`;

const Grid = ({tasks, setTasks, setOnEdit}) => {

    const handleEdit = (item) => {
        setOnEdit(item)
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/" + id)
            .then(({data}) => {
                const newArray = tasks.filter((task) => task.id !== id)

                setTasks(newArray)
                toast.success(data)
            })
            .catch(({data}) => toast.error(data))

        setOnEdit(null);
    }





    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Tasks</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {tasks.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.descricao}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)}/>
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default Grid;