import { useState } from "react";


function IpSubnetCalculator() {
 

  const [ipAddress, setIpAddress] = useState("");
  const [cidr, setCidr] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const isValidIp = (ip) => {
    const parts = ip.split(".");
    if (parts.length !== 4) return false;
    return parts.every((p) => {
      const n = Number(p);
      return !isNaN(n) && n >= 0 && n <= 255;
    });
  };

  const calculateSubnet = () => {
    if (!isValidIp(ipAddress)) {
      setError("Invalid IP address.");
      setResult(null);
      return;
    }

    const cidrNum = Number(cidr);
    if (isNaN(cidrNum) || cidrNum < 0 || cidrNum > 32) {
      setError("Invalid CIDR value (0-32).");
      setResult(null);
      return;
    }

    setError("");

    // Convert IP to binary
    const ipBinary = ipAddress
      .split(".")
      .map((octet) => parseInt(octet).toString(2).padStart(8, "0"))
      .join("");

    // Network address
    const networkBinary = ipBinary.slice(0, cidrNum).padEnd(32, "0");
    const broadcastBinary = ipBinary.slice(0, cidrNum).padEnd(32, "1");

    const binaryToIp = (bin) =>
      [
        parseInt(bin.slice(0, 8), 2),
        parseInt(bin.slice(8, 16), 2),
        parseInt(bin.slice(16, 24), 2),
        parseInt(bin.slice(24, 32), 2),
      ].join(".");

    const subnetMaskBinary = "1".repeat(cidrNum).padEnd(32, "0");
    const subnetMask = binaryToIp(subnetMaskBinary);

    const totalHosts = cidrNum === 32 ? 1 : Math.pow(2, 32 - cidrNum) - 2;

    setResult({
      networkAddress: binaryToIp(networkBinary),
      broadcastAddress: binaryToIp(broadcastBinary),
      subnetMask,
      totalHosts,
    });
  };

  const resetCalculator = () => {
    setIpAddress("");
    setCidr("");
    setResult(null);
    setError("");
  };

  return (
    


   <>

      <div className="mb-3">
        <label className="form-label">IP Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., 192.168.1.1"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">CIDR (0-32)</label>
        <input
          type="number"
          className="form-control"
          placeholder="e.g., 24"
          value={cidr}
          onChange={(e) => setCidr(e.target.value)}
        />
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateSubnet}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Result</h2>
          <p>
            <strong>Network Address:</strong> {result.networkAddress}
          </p>
          <p>
            <strong>Broadcast Address:</strong> {result.broadcastAddress}
          </p>
          <p>
            <strong>Subnet Mask:</strong> {result.subnetMask}
          </p>
          <p>
            <strong>Total Hosts:</strong> {result.totalHosts}
          </p>
        </div>
      )}     
  </>
      );
}

export default IpSubnetCalculator;
