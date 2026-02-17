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

# Export Aliases
Set-Alias -Name csync -Value cda-sync
Set-Alias -Name caudit -Value cda-audit
Set-Alias -Name cbrief -Value cda-brief
Set-Alias -Name cstat -Value cda-status

Write-Host "✅ Surgical Scripting Env Loaded (Cycle V8.8.8-Final)" -ForegroundColor DarkCyan
