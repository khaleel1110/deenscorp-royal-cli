import { ad as admin } from "../index";
import { careerDetails } from "./career-records";

export async function addDeenscorpCareersToFirestore() {
    const db = admin.firestore();

    console.log("Uploading Careers...");

    for (const detail of careerDetails) {

        // Extract only the career fields
        const {
            overview,
            responsibilities,
            requirements,
            qualifications,
            benefits,
            technologies,
            hiringProcess,
            niceToHave,
            closingRemark,
            applicationForm,
            ...career
        } = detail;

        // careers/{careerId}
        await db
            .collection("careers")
            .doc(career.id)
            .set(career);

        // careers/{careerId}/details/information
        await db
            .collection("careers")
            .doc(career.id)
            .collection("details")
            .doc("information")
            .set({
                overview,
                responsibilities,
                requirements,
                qualifications,
                benefits,
                technologies,
                hiringProcess,
                niceToHave,
                closingRemark,
                applicationForm,
            });

        console.log(`✔ Seeded ${career.title}`);
    }

    console.log("✅ Careers seeded successfully.");
}