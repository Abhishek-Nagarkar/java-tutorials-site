---
title: Your first REST endpoint
description: Turn a plain class into a web endpoint with two annotations.
sidebar:
  order: 2
---

**Code:** [lesson-02 tag](https://github.com/YOUR-USER/java-tutorials-code/tree/lesson-02)

Spring Boot turns a plain class into a web endpoint with two annotations.

```java title="HelloController.java"
@RestController
class HelloController {

    @GetMapping("/hello")
    String hello() {
        return "Hello, Spring";
    }
}
```

Run the app and open `http://localhost:8080/hello`.

## Try it yourself

Add a second endpoint, `/hello/{name}`, that greets the person by name.

<details>
<summary>Show solution</summary>

```java
@GetMapping("/hello/{name}")
String hello(@PathVariable String name) {
    return "Hello, " + name;
}
```

</details>
