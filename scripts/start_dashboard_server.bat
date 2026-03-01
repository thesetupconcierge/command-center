@echo off
:: Setup Concierge — Dashboard Server (Cloudflare Tunnel)
:: Serves command-center on port 8080 for hub.setupconcierge.com
:: This script runs at Windows startup via Startup folder

start /min "SC-Dashboard-Server" python -m http.server 8080 --directory "C:\GitHub Local\command-center"
