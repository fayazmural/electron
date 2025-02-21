# Counter App

This repository contains two applications:

1. **Counter Web** (React-based web application)
2. **Counter Desktop** (Electron-based desktop application that runs the Counter Web app)

# Running Counter Web (React App)

### **1️⃣ Install Dependencies**
```sh
cd counter-web
npm install  # or yarn install
```

### **2️⃣ Start the Development Server**
```sh
npm start  # or yarn start
```

- This will start the React development server.
- Open **http://localhost:5173** in your browser to see the counter app.

### **3️⃣ Build for Production**
To create a production build, run:
```sh
npm run build  # or yarn build
```
This generates a `dist/` folder containing optimized static files.

---

# Running Counter Desktop (Electron App)

### **1️⃣ Install Dependencies**
```sh
cd counter-desktop
npm install  # or yarn install
```

### **2️⃣ Run the Electron App in Development Mode**

Before running the Electron app, ensure the React web application is running at http://localhost:5173.

```sh
npm start  # or yarn start
```

- This will launch the desktop app.

### **3️⃣ Package Electron App**
```sh
npm run build
```
This will:
1. Build the React app (`counter-web/dist`)
2. Copy the build to `counter-desktop/build`
3. Package the Electron app

- The packaged app will be inside the `dist/` folder.
- On Windows, you'll get a `dist/win-unpacked/counter-desktop.exe` file.


