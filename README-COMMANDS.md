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

## GitHub Upload
```bash
# Initialize repo (if not already)
git init
# Add files
git add .
# First commit
git commit -m "Initial hospital management app (React + TS + Tailwind)"
# Set remote
git remote add origin https://github.com/Tejass17x/hospital-management.git
# Push
git branch -M main
git push -u origin main
```
