# Exercise 1 - Setting Up JUnit

## Problem Statement

Set up JUnit in a Java project to enable unit testing by configuring the required testing framework and creating a basic test class.

---

## Objective

- Create a Maven-based Java project.
- Configure JUnit 4.13.2 as the unit testing framework.
- Create a test class to verify the project setup.
- Prepare the project for future unit testing exercises.

---

## Technologies Used

- Java 21
- Apache Maven 3.9.11
- JUnit 4.13.2
- Visual Studio Code

---

## Project Structure

```
Exercise-1-Setting-Up-JUnit
│
├── src
│   ├── main
│   │   └── java
│   │       └── com
│   │           └── aadi
│   │               └── junit
│   │                   └── App.java
│   │
│   └── test
│       └── java
│           └── com
│               └── aadi
│                   └── junit
│                       └── CalculatorTest.java
│
├── pom.xml
├── README.md
└── .gitignore
```

---

## Implementation

- Configured a Maven project for Java development.
- Added the JUnit 4.13.2 dependency in the `pom.xml` file.
- Created a sample test class using the `@Test` annotation.
- Successfully executed the project using Maven to validate the JUnit configuration.

---

## Result

The JUnit environment was successfully configured, and the project was built and tested successfully using Maven.

**Build Status:** `BUILD SUCCESS`

---

## Output

The project executed successfully after running:

```bash
mvn clean test
```

**Output Screenshot**

![Project Structure](screenshots/output1.png)

![Build Success](screenshots/output2.png)

```
BUILD SUCCESS
```