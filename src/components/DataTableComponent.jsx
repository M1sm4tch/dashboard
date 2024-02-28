import { useState } from 'react';
import '../styles/DataModel.css'

const DataTableComponent = ({ data }) => {
  const [filters, setFilters] = useState({
    endYear: '',
    topics: '',
    sector: '',
    region: '',
    pest: '',
    source: '',
    country: '',
    city: '',
  });

  const filteredData = data.filter(item => {
    return (
      item.end_year.includes(filters.endYear) &&
      item.topic.includes(filters.topics) &&
      item.sector.includes(filters.sector) &&
      item.region.includes(filters.region) &&
      item.pestle.includes(filters.pest) &&
      item.source.includes(filters.source) &&
      item.country.toLowerCase().includes(filters.country.toLowerCase())
    );
  });

  const handleChangeFilter = (field, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  return (
    <div>
      <div>
        <label>End Year:</label>
        <input
          type="text"
          value={filters.endYear}
          onChange={e => handleChangeFilter('endYear', e.target.value)}
        />
      </div>
      <div>
        <label>Topics:</label>
        <input
          type="text"
          value={filters.topics}
          onChange={e => handleChangeFilter('topics', e.target.value)}
        />
      </div>
      <div>
        <label>Sector:</label>
        <input
          type="text"
          value={filters.sector}
          onChange={e => handleChangeFilter('sector', e.target.value)}
        />
      </div>
      <div>
        <label>Region:</label>
        <input
          type="text"
          value={filters.region}
          onChange={e => handleChangeFilter('region', e.target.value)}
        />
      </div>
      <div>
        <label>PEST:</label>
        <input
          type="text"
          value={filters.pest}
          onChange={e => handleChangeFilter('pest', e.target.value)}
        />
      </div>
      <div>
        <label>Source:</label>
        <input
          type="text"
          value={filters.source}
          onChange={e => handleChangeFilter('source', e.target.value)}
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          value={filters.country}
          onChange={e => handleChangeFilter('country', e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableComponent;
