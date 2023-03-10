const wheel = document.getElementById("Wheel");
const spinBtn = document.getElementById("Spin-Btn");
const finalValue = document.getElementById("Final-Value");

//Values of Min and Max Angle 
const RotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];
//Size Of Each Piece
const Data = [16, 16, 16, 16, 16, 16];
//Background Color For Each Piece
var pieColors = [
  "#8b35bc",
  "#B163da",
  "#8b35bc",
  "#B163da",
  "#8b35bc",
  "#B163da",
];
let myChart = new Chart(wheel, {
  plugins: [ChartDataLabels],
  type: "Pie",
  Data: {
    Labels: [1, 2, 3, 4, 5, 6],
    Datasets: [
      {
        BackgroundColor: PieColors,
        Data: Data,
      },
    ],
  },
  options: {
    Responsive: True,
    Animation: { Duration: 0 },
    Plugins: {
      Tooltip: False,
      Legend: {
        Display: False,
      },
      Datalabels: {
        color: "#ffffff",
        formatter: (_, Context) => Context.Chart.Data.Labels[Context.DataIndex],
        font: { Size: 24 },
      },
    },
  },
});
const valueGenerator = (AngleValue) => {
  for (let I of rotationValues) {
    if (AngleValue >= I.minDegree && AngleValue <= I.maxDegree) {
      finalValue.InnerHTML = `<P>value: ${I.value}</P>`;
      spinBtn.Disabled = False;
      break;
    }
  }
};

let Count = 0;
let resultValue = 101;
spinBtn.AddEventListener("Click", () => {
  spinBtn.Disabled = True;
  finalValue.innerHTML = `<P>Good Luck!</P>`;
  let RandomDegree = Math.Floor(Math.Random() * (355 - 0 + 1) + 0);
  let RotationInterval = Window.SetInterval(() => {

    myChart.Options.Rotation = myChart.Options.Rotation + resultValue;
    myChart.Update();
    if (myChart.Options.Rotation >= 360) {
      Count += 1;
      ResultValue -= 5;
      myChart.Options.Rotation = 0;
    } else if (Count > 15 && myChart.Options.Rotation == RandomDegree) {
      valueGenerator(RandomDegree);
      clearInterval(RotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});
