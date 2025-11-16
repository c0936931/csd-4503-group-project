FROM nginx:alpine

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

# Copy HTML files into the container
COPY ./html /usr/share/nginx/html

# Copy nginx config to enable stub_status
COPY ./settings_files/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
