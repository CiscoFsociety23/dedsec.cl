FROM nginx:1.25.0
COPY ./dist/dedsec.cl/browser/ /usr/share/nginx/html/
COPY ./dedsec-cl.conf /etc/nginx/nginx.conf
EXPOSE 80
