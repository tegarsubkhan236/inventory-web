import { Bar } from "react-chartjs-2";
import type { ChartData, ChartOptions } from 'chart.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export interface BarChartProps {
    options: ChartOptions<'bar'>;
    data: ChartData<'bar'>;
}

export default function BarChart({ data, options }: BarChartProps) {
    return <Bar data={data} options={options} style={{width: '100%'}} />;
}