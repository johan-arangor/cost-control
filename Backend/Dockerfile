# Usa la imagen oficial de Node.js como base
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
EXPOSE 9000
# Comando para iniciar la aplicación
CMD ["npm", "start"]