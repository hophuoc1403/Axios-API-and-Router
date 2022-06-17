import { useEffect, useState } from "react";
import axios from "axios"
import {
    Link
  } from "react-router-dom";

function Home() {
    const[blog,setBlog] = useState([])
    useEffect(() => {
        axios.get('https://62abf710bd0e5d29af183218.mockapi.io/blog').then(response => {setBlog(response.data)}).catch(err => console.log(err))
    })
    return ( 
        <div className="d-flex">
            {blog.map(item => {
                return (
                    <div class="card" style={{width: "18rem"}}>
  <img src={item.avatar} alt="Card image cap" />
  <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

<Link to={`${item.id}`}>go some where</Link>
  </div>

</div>
                )
            })}
        </div>
     );
}

export default Home;