FROM nginx:1.25.0
COPY ./dist/dedsec.cl/browser/ /usr/share/nginx/html/
COPY ./dedsec-cl.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
