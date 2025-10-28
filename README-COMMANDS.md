# Commands Only - HM Care

## Setup
```bash
# From project root
cd C:\Users\vboxuser\Desktop\HM\hm-hospital
npm install
```

## Run (dev)
```bash
npm run dev -- --host
# Open the shown URL, e.g. http://localhost:5173/ or http://localhost:5174/
```

## Build (prod)
```bash
npm run build
npm run preview
```

s

$powershell -NoProfile -ExecutionPolicy Bypass -Command "cd 'C:\Users\vboxuser\Desktop\HM\hm-hospital'; $proc = Get-Process -Name node -ErrorAction SilentlyContinue; npm run dev -- --host"