// Process class
class Process {
  constructor(id, burstTime, arrivalTime = 0) {
    this.id = id;
    this.burstTime = burstTime;
    this.arrivalTime = arrivalTime;
  }
}

// FCFS scheduling
function fcfs(processes) {
  let time = 0;
  let waitingTime = 0;
  let totalTurnaroundTime = 0;
  let totalWaitingTime = 0;

  processes.forEach(process => {
    waitingTime = time - process.arrivalTime; // Time spent in ready queue
    totalWaitingTime += waitingTime;
    console.log(`Process ${process.id} started at time ${time} with waiting time ${waitingTime}`);

    time += process.burstTime; // Update time after process execution
    let turnaroundTime = time - process.arrivalTime;
    totalTurnaroundTime += turnaroundTime;
    console.log(`Process ${process.id} completed at time ${time} with turnaround time ${turnaroundTime}`);
  });

  console.log(`Average waiting time = ${totalWaitingTime / processes.length}`);
  console.log(`Average turnaround time = ${totalTurnaroundTime / processes.length}`);
}

// SJF scheduling
function sjf(processes) {
  processes.sort((a, b) => a.burstTime - b.burstTime);
  let time = 0;
  for (let i = 0; i < processes.length; i++) {
    console.log(`Process ${processes[i].id} is executed at time ${time}`);
    time += processes[i].burstTime;
  }
}

// SJF scheduling with arrival time
function sjfWithArrivalTime(processes) {
  // Sort processes by arrival time and then by burst time
  processes.sort((a, b) => a.arrivalTime - b.arrivalTime || a.burstTime - b.burstTime);

  let time = 0;
  for (let i = 0; i < processes.length; i++) {
    // If the process has not arrived yet, wait for it
    if (processes[i].arrivalTime > time) {
      time = processes[i].arrivalTime;
    }

    console.log(`Process ${processes[i].id} is executed at time ${time}`);
    time += processes[i].burstTime;
  }
}

// Test
let processes = [new Process(1, 10), new Process(2, 5), new Process(3, 8)];

console.log("FCFS scheduling:");
fcfs(processes)

console.log("SJF scheduling:");
sjf(processes)

// Test
let secondProcesses = [new Process(1, 10, 3), new Process(2, 5, 0), new Process(3, 8, 1)];
console.log("SJF scheduling with arrival time:");
sjfWithArrivalTime(secondProcesses);
