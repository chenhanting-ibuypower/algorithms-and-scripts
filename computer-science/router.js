const routerTable = [
  { destination: "192.168.1.0/24", nextHop: "192.168.1.1" },
  { destination: "10.0.0.0/8", nextHop: "10.0.0.1" },
  { destination: "172.16.0.0/12", nextHop: "172.16.0.1" },
];

function getNextHop(destinationIP) {
  for (let i = 0; i < routerTable.length; i++) {
    const { destination, nextHop } = routerTable[i];
    const [network, mask] = destination.split("/");
    const networkIP = ipToNumber(network);
    const maskBits = parseInt(mask);
    const maskIP = ~(Math.pow(2, 32 - maskBits) - 1);
    const maskedNetworkIP = networkIP & maskIP;
    const destinationNumber = ipToNumber(destinationIP);

    if ((destinationNumber & maskIP) === maskedNetworkIP) {
      return nextHop;
    }
  }

  return null;
}

function ipToNumber(ip) {
  return ip.split(".").reduce((acc, val) => (acc << 8) + parseInt(val), 0);
}

console.log(ipToNumber("192.168.1.100"));

console.log(getNextHop("192.168.1.100")); // "192.168.1.1"
console.log(getNextHop("10.1.2.3")); // "10.0.0.1"
console.log(getNextHop("172.16.1.2")); // "172.16.0.1"
console.log(getNextHop("8.8.8.8")); // null
