const fs = require('fs');
const path = require('path');

const structure = {
  // Documentación principal
  'README.md': `# 🍽️ Business Management Suite

Sistema integral de gestión para negocios gastronómicos. Soluciones personalizadas para cada tipo de establecimiento.

## 🎯 Clientes Actuales

### ☕ Cafeterías
- [Yasin Orgánico](./clients/cafeterias/yasin-organico)
- [Template Café](./clients/cafeterias/template-cafe)

### 🍴 Restaurantes
- [Template Restaurant](./clients/restaurantes/template-restaurant)

## 🚀 Quick Start

\`\`\`bash
cd clients/[tipo]/[nombre-cliente]
npm install
npm start
\`\`\`

## 📁 Estructura

- \`clients/\` - Proyectos por cliente
- \`core/\` - Componentes compartidos
- \`templates/\` - Plantillas base
- \`docs/\` - Documentación

---
Desarrollado por Diego Rodríguez
`,

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

  'clients/cafeterias/yasin-organico/README.md': `# ☕ Café Yasin Orgánico

Sistema de gestión personalizado para Café Yasin Orgánico - Monterrey, NL.

## 🚀 Instalación

\`\`\`bash
npm install
npm start
\`\`\`

## 📊 Características

- Dashboard en tiempo real
- Control de inventario
- Análisis P&L
- Asistente IA
`,

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
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,

  'clients/cafeterias/yasin-organico/src/App.js': `// IMPORTANTE: Pega aquí el código del artifact
// Este es solo un placeholder
import React from 'react';

function App() {
  return (
    <div>
      <h1>Café Yasin - Pega aquí el código del artifact</h1>
    </div>
  );
}

export default App;`,

  // Templates
  'clients/cafeterias/template-cafe/README.md': '# Template Café\n\nPlantilla base para nuevos clientes de cafetería.',
  'clients/restaurantes/template-restaurant/README.md': '# Template Restaurant\n\nPlantilla base para nuevos clientes de restaurante.',
  
  // Core components
  'core/components/Dashboard/index.js': `// Dashboard compartido
export { default } from './Dashboard';`,
  
  'core/components/Inventory/index.js': `// Inventario compartido
export { default } from './Inventory';`,

  // Documentación
  'docs/getting-started.md': `# Getting Started

## Agregar nuevo cliente

1. Copia el template correspondiente
2. Personaliza según necesidades
3. Deploy

## Estructura de carpetas
...`,

  'docs/deployment-guide.md': `# Deployment Guide

## Opciones de deployment

1. Vercel
2. Netlify
3. GitHub Pages
`,

  // Configuración
  '.gitignore': `# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build
/dist

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDEs
.idea/
.vscode/
*.swp
*.swo`,

  // Keep empty folders
  'clients/comedores/.gitkeep': '',
  'clients/food-trucks/.gitkeep': '',
  'core/utils/.gitkeep': '',
  'core/hooks/.gitkeep': '',
  'templates/starter-kit/.gitkeep': '',
  'templates/configurations/.gitkeep': '',
};

// Crear toda la estructura
console.log('🏗️  Creando estructura del proyecto...\n');

Object.entries(structure).forEach(([filePath, content]) => {
  const dir = path.dirname(filePath);
  
  // Crear directorio si no existe
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Crear archivo
  fs.writeFileSync(filePath, content);
  console.log(`✅ Creado: ${filePath}`);
});

console.log('\n🎉 ¡Estructura creada exitosamente!');
console.log('\n📋 Próximos pasos:');
console.log('1. Pega el código del artifact en: clients/cafeterias/yasin-organico/src/App.js');
console.log('2. git add .');
console.log('3. git commit -m "feat: Add complete project structure with Yasin Organico client"');
console.log('4. git push origin main');
`;