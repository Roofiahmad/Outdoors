FROM ubuntu:22.04 
# make the directory where the project files will be stored
RUN apt update
RUN apt upgrade
RUN apt install python2 -y && apt install nodejs -y && apt install npm -y
RUN mkdir -p /usr/src/
# set it as the working directory so that we don't need to keep referencing it
WORKDIR /usr/src/
# Copy the package.json file
COPY . .
RUN npm cache clear -f
# install project dependencies
RUN npm install 

ENV PORT=10000
# make sure to set up .dockerignore to copy only necessary files
# run the build command which will build and export html files
RUN npm run build
CMD ["npm", "run", "start"]
EXPOSE 10000