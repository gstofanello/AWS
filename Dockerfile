# Use a imagem oficial do Node.js como base
FROM node:18 AS build

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código do projeto para o diretório de trabalho
COPY . .

# Execute o comando de build para criar a versão otimizada da aplicação
RUN npm run build

# Use a imagem do Nginx para servir a aplicação
FROM nginx:alpine

# Copie os arquivos de build para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta em que o Nginx está ouvindo
EXPOSE 80

# Defina o comando padrão para o contêiner
CMD ["nginx", "-g", "daemon off;"]
