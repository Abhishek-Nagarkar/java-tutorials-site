---
title: Set up Java 21 and Spring Boot 3
description: Install the tools and generate your first Spring Boot project.
sidebar:
  order: 1
---

In this lesson you create the project that every later lesson builds on.

**Code:** [lesson-01 tag](https://github.com/YOUR-USER/java-tutorials-code/tree/lesson-01)

## What you need

- JDK 21 (check with `java -version`)
- An IDE such as IntelliJ IDEA or VS Code
- Maven or Gradle (the generated project includes a wrapper)

## Generate the project

Open [start.spring.io](https://start.spring.io), choose Java 21 and add the **Spring Web** dependency, then download and unzip the project.

## Run it

```bash
./mvnw spring-boot:run
```

When you see `Started Application`, the app is running on port 8080.
