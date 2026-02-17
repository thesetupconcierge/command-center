# sc_sync_daemon.ps1 — Surgical Sync Daemon
# Cycle V8.8.9-Sec Operational Service

$scriptPath = "C:\GitHub Local\command-center\scripts\sc_sync.js"
$logPath = "C:\GitHub Local\command-center\logs\daemon.log"

function Write-DaemonLog {
    param($Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "[$timestamp] $Message" | Out-File -FilePath $logPath -Append
    Write-Host "[$timestamp] $Message" -ForegroundColor Gray
}

Write-DaemonLog "🚀 Starting Surgical Sync Daemon with Sidecar API..."

# Start the Node heartbeat & server process
# heartbeat 5 means sync every 5 minutes + start port 3001 server
node $scriptPath heartbeat 5
