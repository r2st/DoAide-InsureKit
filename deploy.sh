#!/bin/bash
set -e

echo "=== Cleaning up lock files ==="
cd /Users/dev/projects/Products/DoAide-InsureKit
rm -f .git/index.lock .git/HEAD.lock .git/objects/maintenance.lock 2>/dev/null || true

echo "=== Pushing to GitHub ==="
git push origin main

echo ""
echo "=== Deploying to Hetzner ==="
SSH_KEY="/Users/dev/projects/Hackathons/keys/hetzner_deploy_ed25519"
if [ ! -f "$SSH_KEY" ]; then
  echo "SSH key not found at $SSH_KEY"
  echo "Trying default SSH..."
  SSH_CMD="ssh"
else
  SSH_CMD="ssh -i $SSH_KEY -o StrictHostKeyChecking=no"
fi

$SSH_CMD root@89.167.8.178 << 'DEPLOY'
set -e
cd /opt/DoAide-InsureKit
echo "Pulling latest code..."
git pull origin main

echo "Installing Python dependencies..."
.venv/bin/pip install -q -e "api[dev]"

echo "Running database migrations..."
cd api
INSUREKIT_DATABASE_URL=$(grep INSUREKIT_DATABASE_URL /opt/DoAide-InsureKit/.env | cut -d= -f2-) \
  ../.venv/bin/alembic upgrade head
cd ..

echo "Building frontend..."
cd web && npm install --production=false && npm run build
cd ..

echo "Restarting services..."
systemctl restart insurekit-api insurekit-web
echo "=== Deploy complete ==="
DEPLOY

echo ""
echo "=== Smoke test ==="
sleep 3
curl -s -o /dev/null -w "Homepage:   HTTP %{http_code}\n" https://insure.doaide.com/
curl -s -o /dev/null -w "Plan page:  HTTP %{http_code}\n" https://insure.doaide.com/plans/jeevan-anand-715
curl -s -o /dev/null -w "Health:     HTTP %{http_code}\n" https://insure.doaide.com/health
curl -s -o /dev/null -w "Auth me:    HTTP %{http_code}\n" https://insure.doaide.com/auth/me
curl -s https://insure.doaide.com/sitemap.xml | grep -c "<url>" | xargs -I{} echo "Sitemap URLs: {}"
echo "Done!"
