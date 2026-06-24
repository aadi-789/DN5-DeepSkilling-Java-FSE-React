# Exercise 2 - Factory Method Pattern

## Purpose
The purpose of this exercise is to implement the **Factory Method Design Pattern** in Java by building a simple document management system that can create different types of documents such as **Word, PDF, and Excel**.

## Why This Exercise Was Done
This exercise was done to understand how the **Factory Method Pattern** helps in separating object creation logic from the client code. Instead of directly creating objects using `new`, factory classes are used to create the required document objects. This makes the code more organized, flexible, and easier to extend when new document types need to be added.

## What Was Done
In this exercise, a common `Document` interface was created for all document types. Concrete classes such as `WordDocument`, `PdfDocument`, and `ExcelDocument` were implemented to represent different document formats. An abstract factory class `DocumentFactory` was created with the factory method `createDocument()`, and separate factory classes were implemented for each document type to create their respective objects.

## What Was Achieved
This exercise successfully demonstrated the implementation of the **Factory Method Pattern** in Java. It showed how object creation can be delegated to factory classes, reducing tight coupling between the client and concrete classes. The final program was able to create and use different document types through their respective factories in a clean and structured way.

## Output
The program produced the following output by creating different document types using their respective factory classes:

![Output Screenshot](screenshots/output.png)