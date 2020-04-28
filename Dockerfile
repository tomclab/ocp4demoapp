FROM open-liberty:microProfile3

ENV KEYSTORE_REQUIRED "true"
ADD ./demoapp/target/demoapp.war /config/dropins/

# Adding liberty server configuration from local server 
COPY ./demoapp/liberty/config/server.xml /config/server.xml