# 🎬 Películas App

Una aplicación móvil desarrollada en React Native que permite explorar películas populares, mejor calificadas, próximos estrenos y películas en cartelera utilizando la API de The Movie Database (TMDb).

## 📱 Características

- **Películas en Cartelera**: Visualiza las películas que están actualmente en los cines
- **Películas Populares**: Descubre las películas más populares del momento
- **Mejor Calificadas**: Explora las películas con mejor puntuación
- **Próximos Estrenos**: Mantente al día con los próximos lanzamientos
- **Navegación Intuitiva**: Interfaz fácil de usar con carruseles horizontales
- **Carga Infinita**: Carga automática de más contenido al hacer scroll
- **Detalles de Películas**: Vista detallada de cada película (en desarrollo)

## 🛠️ Tecnologías Utilizadas

- **React Native 0.74.3**: Framework principal para desarrollo móvil
- **TypeScript**: Para tipado estático y mejor experiencia de desarrollo
- **React Navigation**: Navegación entre pantallas
- **Axios**: Cliente HTTP para consumir APIs
- **React Native Gesture Handler**: Manejo de gestos y scroll
- **Clean Architecture**: Arquitectura limpia con separación de responsabilidades

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **React Native CLI**
- **Android Studio** (para desarrollo Android)
- **Xcode** (para desarrollo iOS - solo en macOS)
- **Java Development Kit (JDK)**

### Configuración del entorno de desarrollo

Sigue la guía oficial de React Native para configurar tu entorno de desarrollo:
[React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd peliculasApp
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto basado en `.env.template`:
   ```bash
   cp .env.template .env
   ```
   
   Edita el archivo `.env` y agrega tu API key de The Movie Database:
   ```
   THE_MOVIE_DB_KEY=tu_api_key_aqui
   ```
   
   > **Nota**: Puedes obtener tu API key gratuita registrándote en [The Movie Database](https://www.themoviedb.org/settings/api)

4. **Instala las dependencias de iOS** (solo en macOS)
   ```bash
   cd ios && pod install && cd ..
   ```

## 📱 Ejecución

### Android
```bash
# Inicia el Metro bundler
npm start

# En otra terminal, ejecuta la app en Android
npm run android
```

### iOS (solo en macOS)
```bash
# Inicia el Metro bundler
npm start

# En otra terminal, ejecuta la app en iOS
npm run ios
```

## 🧪 Testing

Ejecuta las pruebas unitarias:
```bash
npm test
```

## 📁 Estructura del Proyecto

```
src/
├── config/
│   └── adapters/           # Adaptadores para servicios externos
│       ├── http/           # Adaptador HTTP (Axios)
│       └── movieDB.adapter.ts
├── core/
│   ├── entities/           # Entidades del dominio
│   └── use-cases/          # Casos de uso de la aplicación
├── infrastructure/
│   ├── interfaces/         # Interfaces de datos externos
│   └── mappers/           # Mappers para transformar datos
└── presentation/
    ├── components/        # Componentes reutilizables
    ├── hooks/            # Custom hooks
    ├── routes/           # Configuración de navegación
    └── screens/          # Pantallas de la aplicación
```

## 🏗️ Arquitectura

La aplicación sigue los principios de **Clean Architecture**:

- **Entities**: Modelos de dominio (Movie)
- **Use Cases**: Lógica de negocio (obtener películas por categoría)
- **Infrastructure**: Implementaciones concretas (mappers, interfaces)
- **Presentation**: UI y lógica de presentación (componentes, hooks, pantallas)

### Flujo de Datos

1. **UI** → Llama a un **Custom Hook**
2. **Hook** → Ejecuta un **Use Case**
3. **Use Case** → Utiliza un **HTTP Adapter**
4. **Adapter** → Hace petición a la **API**
5. **Mapper** → Transforma datos de API a **Entities**
6. **Entities** → Se muestran en la **UI**

## 🔧 Scripts Disponibles

- `npm start`: Inicia el Metro bundler
- `npm run android`: Ejecuta la app en Android
- `npm run ios`: Ejecuta la app en iOS
- `npm test`: Ejecuta las pruebas
- `npm run lint`: Ejecuta el linter

## 🌟 Funcionalidades Principales

### Pantalla Principal (HomeScreen)
- Carrusel principal con películas en cartelera
- Carruseles horizontales para diferentes categorías
- Carga infinita al hacer scroll horizontal
- Navegación a pantalla de detalles

### Componentes Principales
- **PosterCarousel**: Carrusel principal de posters
- **HorizontalCarousel**: Carrusel horizontal con carga infinita
- **MoviePoster**: Componente individual de poster de película

### Custom Hooks
- **useMovie**: Maneja el estado y lógica de las películas
  - Carga inicial de todas las categorías
  - Paginación para carruseles infinitos
  - Estados de carga

## 🔄 API Integration

La aplicación consume la API de The Movie Database (TMDb) para obtener:

- `/movie/now_playing`: Películas en cartelera
- `/movie/popular`: Películas populares
- `/movie/top_rated`: Películas mejor calificadas
- `/movie/upcoming`: Próximos estrenos

## 🚧 Desarrollo Futuro

- [ ] Implementar pantalla de detalles de película
- [ ] Agregar funcionalidad de búsqueda
- [ ] Implementar favoritos
- [ ] Agregar modo oscuro
- [ ] Optimizar rendimiento con lazy loading
- [ ] Agregar animaciones y transiciones

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!