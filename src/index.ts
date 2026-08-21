import * as admin from "firebase-admin";
import * as readline from "node:readline";
import { addLCTCoursesToFirestore } from "./student/adding-student-db";
import { addDeenscorpCoursesToFirestore } from "./course/add-course";
import {addDeenscorpCareersToFirestore} from "./career/add-career";
import {CreateUsers} from "./user-management/create-users";


// Emulator configuration
process.env.FIRESTORE_EMULATOR_HOST = "127.0.0.1:8080";
process.env.FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9099";
process.env.FIREBASE_STORAGE_EMULATOR_HOST = "127.0.0.1:9199";

// Initialize Admin SDK
export const ad = admin.initializeApp({
    projectId: "deenscorp-royal",
    storageBucket: "deenscorp-royal.firebasestorage.app",
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Firestore:", process.env.FIRESTORE_EMULATOR_HOST);
console.log("Storage:", process.env.FIREBASE_STORAGE_EMULATOR_HOST);

rl.question("Choose an option: ", async (answer: string) => {
    try {
        switch (+answer) {
            case 1:
                await addLCTCoursesToFirestore();
                break;

            case 2:
                await addDeenscorpCoursesToFirestore();
                await addDeenscorpCareersToFirestore();
                await CreateUsers();
                break;
                case 3:
           /*     await CreateUsers();*/


            default:
                console.log("Invalid option.");
        }

        console.log("Finished.");
    } catch (e) {
        console.error(e);
    }

    rl.close();
});