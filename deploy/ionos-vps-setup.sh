#!/usr/bin/env bash
set -euo pipefail

# Run on a fresh Ubuntu 22.04/24.04 IONOS Cloud VPS as root.
# Usage: bash deploy/ionos-vps-setup.sh

apt-get update
apt-get install -y ca-certificates curl git nginx ufw

if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sh
fi

systemctl enable --now docker nginx

ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw --force enable

mkdir -p /var/www/certbot
cat >/etc/nginx/sites-available/hbsolutions-bootstrap <<'NGINX'
server {
    listen 80;
    listen [::]:80;
    server_name hbsolutions.uk www.hbsolutions.uk;
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
NGINX

ln -sfn /etc/nginx/sites-available/hbsolutions-bootstrap /etc/nginx/sites-enabled/hbsolutions
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo "DNS A records for hbsolutions.uk and www must point at this VPS, then:"
echo "  apt-get install -y certbot python3-certbot-nginx"
echo "  certbot --nginx -d hbsolutions.uk -d www.hbsolutions.uk"
echo "Clone this repo into /opt/hbsolutions, then:"
echo "  cd /opt/hbsolutions && docker compose up -d --build"
