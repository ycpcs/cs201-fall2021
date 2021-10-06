// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new DoubleTopic("Lecture 1: Introduction, Primitive Java", "lectures/lecture01.html","CS201_Lecture01_Gradle.zip", "examples/CS201_Lecture01_Gradle.zip"),
		reading: "1.1&ndash;1.6",
		lab: new NumberedLabGradle(1, "Dog Years")
	},
	{
		topic: new DoubleTopic("Lecture 2: Classes, Objects/References, Encapsulation", "lectures/lecture02.html","CS201_Lecture02_Gradle.zip", "examples/CS201_Lecture02_Gradle.zip"),
		reading: "2.1&ndash;2.3",
		lab: new NumberedLabGradle(2, "Coins class")
	},
	{
		topic: new DoubleTopic("Lecture 3: Arrays and ArrayLists", "lectures/lecture03.html", "CS201_Lecture03_Gradle.zip", "examples/CS201_Lecture03_Gradle.zip"),
		reading: "3.1&ndash;3.9",
		lab: new NumberedLabGradle(3, "Arrays and ArrayLists")
	},
	{
		topic: new TripleTopic("Lecture 4: GUIs and MVC", "lectures/lecture04.html", "CS201_Lecture04_Gradle.zip", "examples/CS201_Lecture04_Gradle.zip", "CS201_GUIMVCDemo_Gradle.zip","examples/CS201_GUIMVCDemo_Gradle.zip"),
		lab: new NumberedLabGradle(4, "Drag and Drop GUI")
	},
	{
		topic: new DoubleTopic("Lecture 5: Overloading, JUnit", "lectures/lecture05.html", "CS201_Lecture05_Gradle.zip", "examples/CS201_Lecture05_Gradle.zip"),
		lab: new NumberedLabGradle(5, "Testing Overloaded Constructors")
	},
 	{
 		topic: new DoubleTopic("Lecture 6: File I/O, Exceptions", "lectures/lecture06.html", "CS201_Lecture06_Gradle.zip","examples/CS201_Lecture06_Gradle.zip"),
 		reading: "2.5&ndash;2.6",
 		lab: new NumberedLabGradle(6, "Text File I/O")
 	},
 	{
 		topic: new DoubleTopic("Lecture 7: Exceptions", "lectures/lecture07.html", "CS201_Lecture07_Gradle.zip", "examples/CS201_Lecture07_Gradle.zip"),
 		reading: "2.5",
 		lab: new NumberedLabGradle(7, "Exceptions")
 	},
 	{
 		topic: new DoubleTopic("Lecture 8: Inheritance", "lectures/lecture08.html", "CS201_Lecture08_Gradle.zip","examples/CS201_Lecture08_Gradle.zip"),
 		reading: "4.1&ndash;4.2",
 		lab: new NumberedLabGradle(8, "Inheritance and Polymorphism")
 	},
 	{
 		topic: new DoubleTopic("Lecture 9: Inheritance (continued)", "lectures/lecture09.html", "CS201_Lecture09_Gradle.zip","examples/CS201_Lecture09_Gradle.zip"),
 		reading: "4.3&ndash;4.4",
 		lab: new NumberedLabGradle(9, "Inheriting Fields and Methods")
 	},
 	{
 		topic: new DoubleTopic("Lecture 10: Type casts, instanceof, Object class, Interfaces", "lectures/lecture10.html", "CS201_Lecture10_Gradle.zip","examples/CS201_Lecture10_Gradle.zip"),
 		lab: new NumberedLabGradle(10, "Comparable, Sorting")
 	},
 	{
 		topic: new Topic("Exam 1 Review", "")
 	},
 	{
 		topic: new Topic("** Exam 1", "")
 	},
 	{
 		topic: new TripleTopic("Lecture 11: Generic methods and classes", "lectures/lecture11.html", "CS201_Lecture11_Gradle.zip","examples/CS201_Lecture11_Gradle.zip", "CS201_Lecture11_Gradle_Final.zip","examples/CS201_Lecture11_Gradle_Final.zip"),
 		reading: "4.5&ndash;4.7",
 		lab: new NumberedLabGradle(11, "Using Generic Containers and Algorithms")
 	},
 	{
 		topic: new Topic("Lecture 12: Generic methods, functors", "lectures/lecture12.html"),
 		reading: "4.8",
 		lab: new NumberedLabGradle(12, "Functors")
 	},
 	{
 		topic: new DoubleTopic("Lecture 13: Analysis of Algorithms", "lectures/lecture13.html", "Lecture 14: Big-O", "lectures/lecture14.html"),
 		reading: "5.1&ndash;5.3",
 		lab: new DoubleNumberedLabGradleNoFile(13, "Benchmarking ArrayList", 14, "Big-O")
 	},
//	{
//		topic: new Topic("AWS Setup", ""),
//		reading: "Canvas videos",
//		lab: new NumberedLabGradle(7, "Inheritance AWS Test")
//	},
//	{
//		topic: new Topic("Lecture 13: Big-O", "lectures/lecture13.html"),
//		reading: "5.4&ndash;5.8",
//		lab: new NumberedLabNoFile(13, "Big-O")
//	},
 	{
 		topic: new Topic("Lecture 15: Collections, Iterators", "lectures/lecture15.html"),
 		reading: "6.1-6.3",
 		lab: new NumberedLabGradle(15, "Iterators, Interleaving")
 	},
 	{
 		topic: new Topic("Lecture 16: Generic Algorithms", "lectures/lecture16.html"),
 		reading: "6.4",
 		lab: new NumberedLabGradle(16, "Generic Algorithms")
 	},
 	{
 		topic: new Topic("Lecture 17: Lists", "lectures/lecture17.html"),
 		reading: "6.5",
 		lab: new NumberedLabGradle(17, "List Reversal")
 	},
 	{
 		topic: new Topic("Exam 2 Review", "")
 	},
 	{
 		topic: new Topic("** Exam 2", "")
 	},
 	{
 		topic: new Topic("Lecture 18: Parallel Programming with Threads", "lectures/lecture18.html"),
 		lab: new NumberedLabGradle(18, "Parallel Estimation of π")
 	},
 	{
 		topic: new Topic("Lecture 19: Stacks and Queues", "lectures/lecture19.html"),
 		reading: "6.6",
 		lab: new NumberedLabGradle(19, "Palindromes")
 	},
 	{
 		topic: new Topic("Lecture 20: Sets and Maps", "lectures/lecture20.html"),
 		reading: "6.7-6.8",
 		lab: new NumberedLabGradle(20, "Word Count")
 	},
 	{
 		topic: new Topic("Lecture 21: Recursion", "lectures/lecture21.html"),
 		reading: "7.1, 7.3",
 		lab: new NumberedLabGradle(21, "Recursion")
 	},
 	{
 		topic: new Topic("Lecture 22: Proof by Induction", "lectures/lecture22.html"),
 		reading: "7.2",
 		lab: new NumberedLabNoFile(22, "Proof by Induction")
 	},
 	{
 		topic: new Topic("Lecture 23: Memoization and Dynamic Programming", "lectures/lecture23.html"),
 		reading: "7.6",
 		lab: new NumberedLabGradle(23, "Binomial Coefficient")
 	},
// 	{
// 		topic: new Topic("Lecture 23: Merge and Quick Sort", "lectures/lecture23.html"),
// 		reading: "8.5-8.6",
// 		lab: new Lab("No lab", "")
// 	},
 	{
 		topic: new Topic("Exam 3 Review", "")
 	},
 	{
 		topic: new Topic("** Exam 3", "")
 	},
//	{
//		topic: new DoubleTopic("Lecture 24: Relational Databases and SQL", "lectures/lecture24.html", "Lecture 25: Database Applications and JDBC", "lectures/lecture25.html"),
//		lab: new DoubleNumberedLab(23, "Relational Databases and SQL", 24, "JDBC")
//	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("101", new Date("12/10/2021 10:15:00")),
		new FinalExamDay("102", new Date("12/10/2021 12:45:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
