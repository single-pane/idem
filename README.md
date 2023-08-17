# Immersive Digital Management Platform [IDEM]

A platform for providing a personalized and immersive customer expereinces. 


## Features

## Run locally
1. Install dependencies

```bash
npm install
```
2. Copy `.env.example` to `.env.local` and update variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. Deploy on Azure Cloud:


Shortcut: <i> start the tunnel first

npm install -g localtunnel

lt --port 3000 --subdomain kerneldomain
</i>
## Notes:
1. If the tables are not created with Prisma; you may need to run them manually and check the database connectivity URL
```bash
npx prisma migrate dev --name init
```
ex: URL = postgresql://postgres@localhost:5432/postgres

2. Missing NEXTAUTH_SECRET=b6b0996d4747f604dcb007ed9a4deff5 causes vague errors with authentication. Provide/change to a default one