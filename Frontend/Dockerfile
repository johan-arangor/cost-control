# imagen oficial de Node.js
FROM node:18-alpine
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copia el archivo package.json y package-lock.json
COPY package*.json ./
# Instala las dependencias
RUN npm install
# Copia el resto de los archivos de la aplicación
COPY . .
# Expone el puerto en el que la aplicación escuchará
EXPOSE 3000

# Compila la aplicación para producción
# RUN npm run start

# Instala un servidor web ligero para servir la aplicación
# RUN npm install -g serve

# Comando para iniciar el servidor web
# CMD ["serve", "-s", "build"]
CMD ["npm", "start"]
