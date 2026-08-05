// ============================================
// FILE: seed-lct-courses.ts
// ============================================

import { ad as admin } from "../index";
import {lctCourses} from "./student-record";


export async function addLCTCoursesToFirestore() {
    const db = admin.firestore();

    for (const course of lctCourses) {
        console.log(`Adding LCT course: ${course.title}`);
        await db.collection("lctCourses").doc(course.id).set(course);
    }

    console.log("All LCT courses uploaded successfully.");
}