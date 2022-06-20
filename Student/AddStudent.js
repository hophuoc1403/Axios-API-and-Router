import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AddStudent() {
    const navigate = useNavigate()
    const [newItem,setNewItem] = useState({})

    const handleSubmit = (e)=>{
        e.preventDefault()

        // add item
        axios.post("https://62af4b28b0a980a2ef3de8ad.mockapi.io/api/gallery/studentlist",newItem).then(Response => {
            navigate("/")
        })
    }
    const setvalue = (e) => {
        setNewItem(item => ({...item,[e.target.name]:e.target.value}))
        console.log(newItem)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div class="form-group">
          <label for=""></label>
          <input type="text" class="form-control" name="name" aria-describedby="helpId" placeholder="Full Name" onChange={setvalue} />
          <input type="text" class="form-control" name="className" aria-describedby="helpId" placeholder="Class Name" onChange={setvalue} />
          <button type="submit" name="" id="" className="btn btn-primary btn-lg btn-block">Submit</button>
        </div>
        </form>
     );
}

export default AddStudent;