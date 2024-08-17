import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
interface chartProps {
    options: any
}
const Chart = (props: chartProps) => {
    const { options } = props || {};
    return <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
}

export default Chart;