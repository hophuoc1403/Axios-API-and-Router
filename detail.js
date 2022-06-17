import { useParams } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from 'react';

function Detail() {
    let id = useParams()

    const[blog,setBlog] = useState([])
    useEffect(() => {
        axios.get(`https://62abf710bd0e5d29af183218.mockapi.io/blog/${id.id}`).then(response => {setBlog(response.data)}).catch(err => console.log(err))
        console.log(id)
    },[id])
    return ( 
        <div class="jumbotron">
  <h1 class="display-4">{blog.name}</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
     );
}

export default Detail;