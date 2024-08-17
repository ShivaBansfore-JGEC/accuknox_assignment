import Chart from './Chart';

interface donutChartProps {
    options: any
}

const DonutChart = (props: donutChartProps) => {
    const { options } = props || {};
    return (
        <div>
            <Chart
                options={options}
            />
        </div>
    )
}

export default DonutChart;

