#!/bin/bash

if [[ $1 && $1 -eq 1 ]]; then
    echo 'cd gs-rest-service/initial'
    cd gs-rest-service/initial && ./gradlew build && mvn spring-boot:run
else
    echo 'cd gs-handling-form-submission/initial'
    cd gs-handling-form-submission/initial && ./gradlew build && mvn spring-boot:run
fi
