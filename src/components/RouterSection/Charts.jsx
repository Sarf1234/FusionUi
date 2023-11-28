import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend,
        ArcElement
    } from "chart.js";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
)

function Barchart() {

  const data = {
    labels: ["Kroger", "Ahold","Safeway","C&S Wholesale","Schnucks","Wakefern"],
    datasets: [
      {
        label: 'Last Year',
        data: [900, 730, 650, 570, 420, 200],
        backgroundColor: "#1B3D6D",
      },
      {
        label: 'Current Year',
        data: [700, 600, 500, 400, 300, 150],
        backgroundColor: "#39F"
      },
    ]
  }
  const options = {
    indexAxis: 'y',
    layout: {
        padding: 0
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },           
    },
    scales: {
      y: {
        
          grid: {
            display: false
          }
      },
      x: {
        display: false,
          grid: {
            display: false
          }
      },
    }
  }

  return (
    <div className="h:380px">
      <Bar data={data} options={options} width={300} height={40} />
    </div>
  );
}

function BarchartGrey() {

    const data = {
      labels: ["Kroger", "Ahold","Safeway","C&S Wholesale","Schnucks","Wakefern"],
      datasets: [
          {
              label: 'Writes on Delta',
              data: [1000, 900, 700, 600, 500, 400],
              backgroundColor: "rgb(172,176,189)"
          }
      ]
    }
    const options = {
      indexAxis: 'y',
      layout: {
          padding: 0
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },           
      },
      scales: {
        y: {
            grid: {
                display: false
            }
        },
        x: {
          display: false,
            grid: {
                display: false
            }
        },
      }
    }
  
    return (
      <div className="h:400px">
        <Bar data={data} options={options} width={300} height={40} />
      </div>
    );
  }

function BarchartRed() {

    const data = {
        labels: ["Kroger", "Ahold","Safeway","C&S Wholesale","Schnucks","Wakefern"],
      datasets: [
          {
              label: 'Invalid',
              data: [10, 9, 8, 4, 6, 2],
              backgroundColor: "#CE3528"
          }
      ]
    }
    const options = {
        indexAxis: 'y',
        layout: {
            padding: 0
        },
        maintainAspectRatio: false,
        elements: {
          bar: {
            borderWidth: 0,
            borderHeight: 10,
          },
        },
        responsive: true,
        title: {
          display: false,
        },
        scales: {
          y: {
              grid: {
                  display: false
              }
          },
          x: {
            display: false,
              grid: {
                  display: false
              }
          },
        },
        plugins: {
          legend: {
            display: false,
          },           
        },
      }
  
    return (
      <div className="h:400px@>=md h:350px@<md w:200px@<md">
        <Bar data={data} options={options} width={300} height={40} />
      </div>
    );
  }

  function BarchartGrayValid() {

    const data = {
        labels: ["Kroger", "Ahold","Safeway","C&S Wholesale","Schnucks","Wakefern"],
      datasets: [
          {
              label: 'Invalid',
              data: [10, 9, 8, 4, 6, 2],
              backgroundColor: "rgb(172,176,189)"
          }
      ]
    }
    const options = {
        indexAxis: 'y',
        layout: {
            padding: 0
        },
        maintainAspectRatio: false,
        elements: {
          bar: {
            borderWidth: 0,
            borderHeight: 10,
          },
        },
        responsive: true,
        title: {
          display: false,
        },
        scales: {
          y: {
              grid: {
                  display: false
              }
          },
          x: {
            display: false,
              grid: {
                  display: false
              }
          },
        },
        plugins: {
          legend: {
            display: false,
          },           
        },
      }
  
    return (
      <div className="h:400px@>=md h:350px@<md w:200px@<md">
        <Bar data={data} options={options} width={300} height={40} />
      </div>
    );
  }

  function BarchartGreen() {
    const data = {
      labels: ["Kroger", "Ahold","Safeway","C&S Wholesale","Schnucks","Wakefern"],
      datasets: [
          {
            label: 'Valid',
              data: [10, 8, 5, 6, 5, 3],
              backgroundColor: "#08A045"
          }
      ]
    }
    const options = {
      indexAxis: 'y',
      layout: {
          padding: 0
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },           
      },
      elements: {
        bar: {
          borderWidth: 0,
          borderHeight: 10,
        },
      },
      responsive: true,
      title: {
        display: false,
      },
      scales: {
        y: {
            grid: {
                display: false
            }
        },
        x: {
          display: false,
            grid: {
                display: false
            }
        },
      }
    }
  
    return (
      <div className="h:400px@>=md h:350px@<md w:200px@<md">
        <Bar data={data} options={options} width={300} height={40} />
      </div>
    );
  }

function PieChart() {

    const dataPie = {
        labels: [],
        datasets: [{
          label: 'My First Dataset',
          data: [400, 600 ],
          backgroundColor: [
            '#CE3528',
            '#08A045',
          ],
          hoverOffset: 4
        }]
      };
  
    return (
      <div className="chart">
        <Doughnut data={dataPie}/>
      </div>
    );
  }

  function PieChart_Red_Grey() {

    const dataPie = {
        labels: [],
        datasets: [{
          label: 'My First Dataset',
          data: [400, 600 ],
          backgroundColor: [
            '#CE3528',
            'rgb(172,176,189)',
          ],
          hoverOffset: 4
        }]
      };
  
    return (
      <div className="chart">
        <Doughnut data={dataPie}/>
      </div>
    );
  }
  function PieChart_Green_Grey() {

    const dataPie = {
        labels: [],
        datasets: [{
          label: 'My First Dataset',
          data: [400, 600 ],
          backgroundColor: [
            'rgb(172,176,189)',
            '#08A045',
          ],
          hoverOffset: 4
        }]
      };
  
    return (
      <div className="chart">
        <Doughnut data={dataPie}/>
      </div>
    );
  }

export { Barchart, PieChart, BarchartGrayValid, BarchartRed, BarchartGreen, BarchartGrey, PieChart_Green_Grey, PieChart_Red_Grey };