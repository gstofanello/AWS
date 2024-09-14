# Usar imagem oficial do Node.js como base
FROM node:18

# Criar diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos package*.json para o container
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos para o container
COPY . .

# Expor a porta 25000
EXPOSE 25000

# Comando para rodar a aplicação
CMD ["node", "index.js"]

