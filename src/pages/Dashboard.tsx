import Chart from "react-apexcharts";

const MyChart = () => {
  const series = [ //data on the y-axis
    {
      name: "Temperature in Celsius",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ];
  const options = { //data on the x-axis
    chart: { id: 'basic-bar'},
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };

  return (
    <div>
      <Chart
      className="cursor-pointer"
        options={options}
        series={series}
        type="bar"
        width="450"
      />
    </div>
  )
}

export function Dashboard() {
  return (
    <div className="">
      <MyChart/>
    </div>
  )
}