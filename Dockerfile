FROM nginx:alpine

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

# Copy HTML files into the container
COPY ./html /usr/share/nginx/html

# Copy nginx config
COPY ./settings_files/nginx.conf /etc/nginx/conf.d/default.conf

# Non-root best practice
RUN adduser -D -H -u 1001 webuser && \
    chown -R webuser:webuser /usr/share/nginx/html
USER 1001

# Expose port 80
EXPOSE 80
