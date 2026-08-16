import { ad as admin } from "../index";
import {courseCategories, courses, courseSessions, courseTopics, paymentInfo, trainingVenues} from "./course-record";


export async function addDeenscorpCoursesToFirestore() {

    const db = admin.firestore();

    console.log("Uploading Course Categories...");

    for (const category of courseCategories) {

        await db
            .collection("course-categories")
            .doc(category.id)
            .set(category);

        console.log(`✔ Category: ${category.name}`);
    }

    console.log("Uploading Training Venues...");

    for (const venue of trainingVenues) {

        await db
            .collection("training-venues")
            .doc(venue.id)
            .set(venue);

        console.log(`✔ Venue: ${venue.name}`);
    }

    console.log("Uploading Payment Information...");

    for (const payment of paymentInfo) {
        const { id, ...paymentData } = payment;

        await db
            .collection("settings")
            .doc(id)
            .set(paymentData);

        console.log(`✔ Payment Information: ${payment.accountName}`);
    }

    console.log("✅ Payment Information Seeded Successfully.");


    console.log("Uploading Courses...");

    for (const course of courses) {

        const {

            overview,
            objectives,
            outcomes,
            whoShouldAttend,
            prerequisites,

            ...courseData

        } = course;

        //------------------------------------------------------
        // courses/{courseId}
        //------------------------------------------------------

        await db
            .collection("courses")
            .doc(course.id)
            .set(courseData);

        //------------------------------------------------------
        // courses/{courseId}/details/information
        //------------------------------------------------------

        await db
            .collection("courses")
            .doc(course.id)
            .collection("details")
            .doc("information")
            .set({

                overview,
                objectives,
                outcomes,
                whoShouldAttend,
                prerequisites,

            });

        //------------------------------------------------------
        // courses/{courseId}/topics
        //------------------------------------------------------

        const topics = courseTopics.filter(
            t => t.courseId === course.id
        );

        for (const topic of topics) {

            await db
                .collection("courses")
                .doc(course.id)
                .collection("topics")
                .doc(topic.id)
                .set(topic);
        }

        //------------------------------------------------------
        // courses/{courseId}/sessions
        //------------------------------------------------------

        const sessions = courseSessions.filter(
            s => s.courseId === course.id
        );

        for (const session of sessions) {

            await db
                .collection("courses")
                .doc(course.id)
                .collection("sessions")
                .doc(session.id)
                .set(session);
        }

        console.log(`✔ Course: ${course.name}`);

    }

    console.log("✅ All Courses Seeded Successfully.");
}