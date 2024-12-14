FROM grafana/k6:latest
WORKDIR /scripts
COPY load-test.js .
ENTRYPOINT ["k6", "run", "/scripts/load-test.js"]