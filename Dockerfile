FROM nginx:1.25.0
COPY ./dist/dedsec.cl/browser/ /usr/share/nginx/html/
COPY ./ssl /ssl
