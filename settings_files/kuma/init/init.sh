#!/bin/sh
# Wait for Uptime Kuma to initialize
sleep 10

# Import monitors from JSON
node /app/server/import.js /init/monitors.json