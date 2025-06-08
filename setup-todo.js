const fs = require('fs');
const path = require('path');

const structure = {
  // Documentación principal
  'README.md': `# 🍽️ Business Management Suite

Sistema integral de gestión para negocios gastronómicos.`,

  // Cliente Yasin
  'clients/cafeterias/yasin-organico/package.json': `{
  "name": "cafe-yasin-management",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "recharts": "^2.5.0",
    "lucide-react": "^0.263.1",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}`,

  'clients/cafeterias/yasin-organico/README.md': '# ☕ Café Yasin Orgánico',
  'clients/cafeterias/yasin-organico/public/index.html': `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Café Yasin - Sistema de Gestión</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,

  'clients/cafeterias/yasin-organico/src/index.js': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,

  'clients/cafeterias/yasin-organico/src/App.js': '// PEGA AQUÍ EL CÓDIGO DEL SISTEMA DE GESTIÓN',

  // Templates y otros
  'clients/cafeterias/template-cafe/README.md': '# Template Café',
  'clients/restaurantes/template-restaurant/README.md': '# Template Restaurant',
  'clients/comedores/.gitkeep': '',
  'clients/food-trucks/.gitkeep': '',
  'core/components/Dashboard/index.js': 'export default function Dashboard() {}',
  'core/components/Inventory/index.js': 'export default function Inventory() {}',
  'core/utils/.gitkeep': '',
  'core/hooks/.gitkeep': '',
  'docs/getting-started.md': '# Getting Started',
  'docs/deployment-guide.md': '# Deployment Guide',
  'templates/starter-kit/.gitkeep': '',
  'templates/configurations/.gitkeep': '',
  '.gitignore': 'node_modules/\n.DS_Store\n*.log\nbuild/\n.env'
};

// Crear toda la estructura
Object.entries(structure).forEach(([filePath, content]) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
  console.log(`✅ Creado: ${filePath}`);
});

console.log('\n🎉 ¡Estructura completa creada!');
