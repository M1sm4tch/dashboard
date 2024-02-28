import DataTableComponent from "./DataTableComponent";
import { useState, useEffect } from 'react';
import axios from 'axios';

  const GettingData = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/getjson'); // Update the endpoint as per hosted api
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 
  

    return (
      <div>
        <h2>Data Table with Filters</h2>
        <DataTableComponent data={data} />
      </div>
    );
  };

  export default GettingData;