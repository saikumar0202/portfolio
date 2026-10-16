@echo off
title Portfolio dev server
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  call npm install
)
echo Starting dev server at http://localhost:5173
call npm run dev -- --port 5173 --strictPort
pause
