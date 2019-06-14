import React from "react";
import axios from 'axios'

export default function House(props){
  function deleteProperty(id){
    axios.delete('api/${id}')
    axios.get('/api/')
    .then(res => props.propertyUpdate(res))
  }
}
      return (
      <div className="House">
          <h1>House</h1>
        
      </div>
    );
  }
}

export default House;
