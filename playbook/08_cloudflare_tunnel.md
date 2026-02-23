# 08 — Cloudflare Zero Trust Tunnel

> Secure global access to your home workstation without port forwarding.

---

## Why This Matters

A Cloudflare Tunnel creates an **outbound-only** connection from your home machine to Cloudflare's edge. This means:

- **No open ports** — your router stays locked down
- **No exposed IP** — Cloudflare proxies all traffic
- **Free SSL** — automatic HTTPS on all services
- **DDoS protection** — Cloudflare's full edge
- **Access control** — email/OTP gating per service
- **Free tier** — supports up to 50 users

---

## Prerequisites

| Requirement | Status |
|---|---|
| Cloudflare account (free) | ☐ Create at [dash.cloudflare.com](https://dash.cloudflare.com) |
| Domain on Cloudflare | ☐ Add domain, point nameservers to Cloudflare |
| Home machine (always-on) | ☐ Windows workstation or Docker host |
| `cloudflared` CLI | ☐ Install via `winget install Cloudflare.cloudflared` |

> [!IMPORTANT]
> You need a domain with nameservers pointing to Cloudflare. If you already have one (e.g., `thesetupconcierge.com`), add it to your Cloudflare account first.

---

## Step 1 — Create the Tunnel

1. Log into [Cloudflare Zero Trust Dashboard](https://one.dash.cloudflare.com)
2. Navigate to **Networks → Tunnels**
3. Click **Create a Tunnel**
4. Select **Cloudflared** as connector type
5. Name it: `home-workstation`

Cloudflare will provide an install command with a unique token. **Copy it.**

---

## Step 2 — Install `cloudflared` on Windows

```powershell
# Option A: Winget (recommended)
winget install Cloudflare.cloudflared

# Option B: Scoop
scoop install cloudflared
```

After install, run the token command Cloudflare provided:

```powershell
cloudflared service install <YOUR_TUNNEL_TOKEN>
```

This registers `cloudflared` as a **Windows Service** that starts automatically on boot.

### Verify

```powershell
# Check service status
Get-Service cloudflared

# Check tunnel status
cloudflared tunnel info
```

The tunnel connector should show as **Healthy** in the Cloudflare dashboard.

---

## Step 3 — Configure Public Hostnames

Map subdomains to local services. In the Cloudflare dashboard under your tunnel:

| Subdomain | Service | Local URL | Use Case |
|---|---|---|---|
| `dash.yourdomain.com` | HTTP | `http://localhost:8080` | Sidecar/Dashboard API |
| `code.yourdomain.com` | HTTP | `http://localhost:3000` | Dev server access |
| `files.yourdomain.com` | HTTP | `http://localhost:8081` | File server |
| `rdp.yourdomain.com` | RDP | `rdp://localhost:3389` | Remote Desktop |

> [!TIP]
> Start with just the sidecar dashboard server. Add more services one at a time after verifying each works.

### For services with self-signed certs

Enable **No TLS Verify** under the hostname's additional settings.

---

## Step 4 — Lock Down with Access Policies

**Never expose services without access control.** Add policies in Zero Trust → Access → Applications:

1. **Create Application** → Self-hosted
2. Set the application URL (e.g., `dash.yourdomain.com`)
3. **Add Policy**: Allow → Emails → `your@email.com`
4. This sends an OTP to your email on every login attempt

### Recommended Policy Matrix

| Service | Auth Method | Session Duration |
|---|---|---|
| Dashboard / API | Email OTP | 24 hours |
| Dev Servers | Email OTP | 8 hours |
| RDP | Email OTP + Device Posture | 4 hours |
| File Server | Email OTP | 12 hours |

---

## Step 5 — Verify from Mobile / Remote

1. Open your phone browser
2. Navigate to `https://dash.yourdomain.com`
3. Cloudflare should prompt for email authentication
4. Enter OTP → you should see your sidecar dashboard

✅ If you see your dashboard, the tunnel is working.

---

## Nomad Mode Integration

Once the tunnel is active, update the sidecar sync config to use the Cloudflare hostname instead of `localhost`:

```javascript
// In dashboard settings or sidecar config:
const SIDECAR_URL = 'https://dash.yourdomain.com';
```

This enables **Nomad Mode** — full dashboard access from anywhere:

- iPhone Safari → dashboard + Captain's Log
- iPad → full session workflow
- Hotel WiFi → secure tunneled access (no VPN needed)

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Tunnel shows "Inactive" | Check `cloudflared` service: `Get-Service cloudflared` |
| "502 Bad Gateway" | Local service not running on expected port |
| "Access Denied" | Check Access Policy email matches |
| Slow connection | Normal for free tier — Cloudflare routes via nearest PoP |
| Certificate errors | Enable "No TLS Verify" for self-signed internal certs |

---

## Maintenance Ritual

Add to `/morning` workflow:

```
☐ Check tunnel health: Cloudflare Dashboard → Networks → Tunnels
☐ Verify connector status: Healthy
☐ Test mobile access (weekly)
```

---

*Created: February 23, 2026 by Antigravity*
*Source: Nomad Prep / a40*
