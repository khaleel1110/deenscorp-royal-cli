import { ad as admin } from "../index";

import {
    courseCategories,
    courses,
    trainingVenues,
    courseTopics,
    courseSessions,
} from "./course-record";

import * as path from "path";
import * as fs from "fs";

export async function addDeenscorpCoursesToFirestore() {
    const db = admin.firestore();

    console.log("Uploading Course Categories...");

    for (const category of courseCategories) {
        await db.collection("courseCategories").doc(category.id).set(category);
    }

    console.log("Uploading Training Venues...");

    const bucket = admin.storage().bucket();

    console.log("Using bucket:", bucket.name);

    for (const venue of trainingVenues) {
        const localImage = path.resolve(
            process.cwd(),
            "../deenscorp-royal-cli/src/assets/training-venues",
            venue.image
        );

        console.log("Uploading:", localImage);

        let imageUrl = "";

        if (fs.existsSync(localImage)) {
            const destination = `training-venues/${venue.image}`;

            await bucket.upload(localImage, {
                destination,
                metadata: {
                    contentType: "image/webp",
                },
            });

            imageUrl =
                `http://127.0.0.1:9199/v0/b/${bucket.name}/o/${encodeURIComponent(destination)}?alt=media`;

            console.log("Stored URL:", imageUrl);
        } else {
            console.log("Image not found:", localImage);
        }

        await db.collection("trainingVenues").doc(venue.id).set({
            ...venue,
            image: imageUrl,
        });
    }

    console.log("Uploading Courses...");

    for (const course of courses) {
        await db.collection("courses").doc(course.id).set(course);
    }

    console.log("Uploading Course Topics...");

    for (const topic of courseTopics) {
        await db.collection("courseTopics").doc(topic.id).set(topic);
    }

    console.log("Uploading Course Sessions...");

    for (const session of courseSessions) {
        await db.collection("courseSessions").doc(session.id).set(session);
    }

    console.log("✅ Deenscorp training platform seeded successfully.");
}