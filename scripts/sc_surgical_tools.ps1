# sc_surgical_tools.ps1 — Surgical Terminal Mastery
# CDA / Setup Concierge Operational Script

function cda-sync {
    Write-Host "📡 Initiating Surgical Sync (Local <-> Gist)..." -ForegroundColor Cyan
    node "C:\GitHub Local\command-center\scripts\sc_sync.js" pull
}

function cda-audit {
    param($Path = ".")
    Write-Host "🧼 Running Hygiene Audit on: $Path" -ForegroundColor Green
    # Implementation of /hygiene standard check
    Get-ChildItem -Path $Path -Recurse | ForEach-Object {
        if ($_.Name -match "[A-Z]" -or $_.Name -match "\s") {
            Write-Host "❌ Violation: $($_.Name)" -ForegroundColor Red
        }
        else {
            Write-Host "✅ Clean: $($_.Name)" -ForegroundColor Gray
        }
    }
}

function cda-brief {
    param($FilePath)
    if (-not $FilePath) { Write-Host "Usage: cda-brief <markdown-file>" -ForegroundColor Yellow; return }
    Write-Host "📄 Converting Briefing: $FilePath to PDF..." -ForegroundColor Magenta
    # Placeholder for md-to-pdf call
    # npx md-to-pdf $FilePath
}

function cda-status {
    Write-Host "🏁 CDA System Status" -ForegroundColor White
    Write-Host "-------------------"
    git -C "C:\GitHub Local\Business Ideas" status --short
    git -C "C:\GitHub Local\Career Hub" status --short
    git -C "C:\GitHub Local\command-center" status --short
}

function sc-setup {
    $configDir = "C:\GitHub Local\.agent\config"
    if (-not (Test-Path $configDir)) {
        New-Item -Path $configDir -ItemType Directory | Out-Null
        Write-Host "📁 Created config directory: $configDir" -ForegroundColor Gray
    }

    $gistId = "438b27ebdf46f85a3993a38a9a9b06c7"
    $pat = Read-Host -Prompt "Enter your GitHub PAT (ghp_...)"
    
    if (-not $pat -or $pat -notmatch "^ghp_") {
        Write-Host "❌ Invalid PAT format. Should start with 'ghp_'" -ForegroundColor Red
        return
    }

    $json = @{
        gistId = $gistId
        pat    = $pat
    } | ConvertTo-Json

    $configPath = Join-Path $configDir "surgical_secrets.json"
    $json | Out-File -FilePath $configPath -Encoding utf8
    
    Write-Host "✅ Surgical Secrets Initialized at $configPath" -ForegroundColor Green
    Write-Host "🚀 Run 'csync' to verify connectivity." -ForegroundColor Cyan
}

function cda-clean-orphans {
    param($Path = "C:\GitHub Local\Business Ideas\Setup Concierge")
    Write-Host "🧼 Sweeping for Orphans & Deadweight in: $Path" -ForegroundColor Green
    
    # 1. Sweep for Empty Action Item folders
    Write-Host "📂 Checking for empty Action Item folders..." -ForegroundColor Gray
    $emptyFolders = Get-ChildItem -Path $Path -Recurse -Directory | Where-Object { 
        $_.Name -eq "Action Items" -and (Get-ChildItem -Path $_.FullName).Count -eq 0 
    }

    if ($emptyFolders) {
        $emptyFolders | ForEach-Object {
            Write-Host "🗑️ Removing vacant action lane: $($_.FullName)" -ForegroundColor Yellow
            Remove-Item $_.FullName -Force
        }
    }
    else {
        Write-Host "✅ All Action Item lanes populated." -ForegroundColor DarkGray
    }

    # 2. Sweep for temp_ files
    Write-Host "📄 Checking for temp files..." -ForegroundColor Gray
    $tempFiles = Get-ChildItem -Path $Path -Recurse -File -Filter "temp_*" 
    
    if ($tempFiles) {
        $tempFiles | ForEach-Object {
            Write-Host "⚠️ Found orphan: $($_.Name) at $($_.DirectoryName)" -ForegroundColor Red
        }
        Write-Host "`n💡 Run 'Remove-Item <path>' manually to prune these artifacts." -ForegroundColor Cyan
    }
    else {
        Write-Host "✅ No stale temp files found." -ForegroundColor DarkGray
    }
}

# Export Aliases
Set-Alias -Name csync -Value cda-sync
Set-Alias -Name caudit -Value cda-audit
Set-Alias -Name cbrief -Value cda-brief
Set-Alias -Name cstat -Value cda-status
Set-Alias -Name csetup -Value sc-setup
Set-Alias -Name csweep -Value cda-clean-orphans

Write-Host "✅ Surgical Scripting Env Loaded (Cycle V8.8.8-Final)" -ForegroundColor DarkCyan
