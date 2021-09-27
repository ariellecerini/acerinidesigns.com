#Names a server and declares the listening port
server {
    listen 80;
    server_name acerinidesigns.com www.acerinidesigns.com;

    #Configures the publicly served root directory
    #Configures the index file to be served
    root /var/www/acerinidesigns.com;
    index index.html index.htm;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

}
