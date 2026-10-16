@echo off
title Deploy portfolio to Vercel
cd /d "%~dp0"

echo.
echo === 1/4  Installing dependencies (first run only) ===
if not exist node_modules (
  call npm install || goto :fail
)

echo.
echo === 2/4  Checking the site builds ===
call npm run build || goto :fail

echo.
echo === 3/4  Signing in to Vercel (a browser window opens the first time) ===
call npx --yes vercel@latest whoami >nul 2>&1
if errorlevel 1 (
  call npx --yes vercel@latest login || goto :fail
)

echo.
echo === 4/4  Deploying to production as "saikumar-anapuram" ===
call npx --yes vercel@latest link --yes --project saikumar-anapuram || goto :fail
call npx --yes vercel@latest deploy --prod --yes || goto :fail

echo.
echo Done! Your site is live at https://saikumar-anapuram.vercel.app
echo (If that name was taken, the address is printed just above.)
pause
exit /b 0

:fail
echo.
echo Something went wrong - copy the message above and send it to Claude.
pause
exit /b 1
