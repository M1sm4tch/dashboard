import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export const data = {
  labels: ['Red','Blue','Green'],
  datasets: [{
    label: '# of votes',
    data: [12,30,18] ,
    backgroundColor:  [
      `rgba(255,0,0,0.2)`,
      `rgba(0,0,255,0.2)`,
      'rgba(0,255,0,0.2)'
    ],
    borderColor: [
      'rgba(0,0,0,0.2',
      `rgba(0,0,0,0.2`,
      `rgba(0,0,0,0.2`
    ],
    borderWidth: 1
  }]
};



export const BarChart = () => {
  return <Bar height={400} data={data} />;
}


export default BarChart