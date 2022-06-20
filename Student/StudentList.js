import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentList() {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get("https://62af4b28b0a980a2ef3de8ad.mockapi.io/api/gallery/studentlist").then(Response => setList(Response.data))
            .catch(error => console.log(error))
    },[])
    return (
        <div>
            <Link to={"/detail"} >add</Link>
            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Class Name</th>
                        <th>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.className}</td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;