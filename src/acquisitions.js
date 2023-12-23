import Chart from 'chart.js/auto';

function createChart(canvasId, chartType, data) {
  const chartCanvas = document
    .getElementById('acquisitions')
    .appendChild(document.createElement('canvas'));
  chartCanvas.id = canvasId;

  new Chart(document.getElementById(canvasId), {
    type: chartType,
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map((row) => row.count),
        },
      ],
    },
  });
}

function createSaveButton(canvasId, chartName) {
  const saveButton = document
    .getElementById('acquisitions')
    .appendChild(document.createElement('button'));
  saveButton.textContent = `Save ${chartName}`;
  saveButton.addEventListener('click', () => {
    const chartCanvas = document.getElementById(canvasId);
    const dataURL = chartCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `${chartName.toLowerCase()}_chart.png`;
    link.click();
  });
}

export async function acquisitions() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  createChart('pie', 'pie', data);
  createSaveButton('pie', 'Pie Chart');

  createChart('bar', 'bar', data);
  createSaveButton('bar', 'Bar Chart');
}

acquisitions();
