const fs = require('fs');
const path = require('path');

// Crear carpetas principales
const folders = [
  'clients/cafeterias/yasin-organico/src',
  'clients/cafeterias/yasin-organico/public',
  'clients/restaurantes',
  'clients/comedores',
  'core/components',
  'docs',
  'templates'
];

folders.forEach(folder => {
  fs.mkdirSync(folder, { recursive: true });
  console.log('✅ Carpeta creada:', folder);
});

// Crear README principal
fs.writeFileSync('README.md', '# Business Management Suite\n\nSistema de gestión');
console.log('✅ README.md creado');

console.log('\n🎉 ¡Estructura creada!');
