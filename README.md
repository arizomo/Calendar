# Calendario Colombia

Aplicación web desarrollada con **Angular 19** y **PrimeNG** para visualizar el calendario de Colombia con los días festivos nacionales. Inspirado en sitios como [cuandoenelmundo.com](https://www.cuandoenelmundo.com/calendario/colombia/2025).

## 🧱 Tecnologías usadas

- [Angular 19](https://angular.dev/)
- [PrimeNG](https://primeng.org/) – Componentes UI
- [TypeScript](https://www.typescriptlang.org/)
- [Bulma](https://bulma.io/) – (si aplica como framework de estilos)
- [RxJS](https://rxjs.dev/) – para gestión reactiva de datos

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/arizomo/Calendar.git
cd Calendar/Calendario
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
ng serve
```

4. Abre [http://localhost:4200](http://localhost:4200) en tu navegador.

## 📁 Estructura del proyecto

```
Calendario/
├── src/
│   ├── app/
│   │   ├── calendar/        # Componente principal del calendario
│   │   ├── shared/          # Componentes y servicios reutilizables
│   │   └── app.module.ts    # Módulo raíz
│   └── assets/              # Imágenes y recursos estáticos
├── angular.json             # Configuración del CLI
├── package.json             # Dependencias del proyecto
└── README.md                # Este archivo
```

## 📝 Funcionalidades

- Visualización por mes con días festivos destacados.
- Resaltado de fechas importantes en Colombia.
- Responsive y accesible.
- Posibilidad de ampliar con eventos personalizados.

## 📦 Build para producción

```bash
ng build --configuration=production
```

Los archivos compilados estarán en la carpeta `dist/`.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas sugerir cambios, crear nuevos componentes o corregir errores, abre un issue o haz un pull request.

## 📄 Licencia

MIT
