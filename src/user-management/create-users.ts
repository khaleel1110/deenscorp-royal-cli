import * as admin from 'firebase-admin';

// Interface for user data including Firestore fields
interface UserData {
    email: string;
    password: string;
    displayName: string;
    localGovernment: string;
    location: string;
    phone: string;
    phoneType: string;

}

export async function CreateUsers() {
    const users: UserData[] = [
        {
            displayName: 'Abubakar Bala',
            email: 'Abubakarbalaten10@gmail.com',
            password: 'AAGwarzo4321#',
            localGovernment: 'Bichi',
            location: 'Kano',
            phone: '++234 903 366 4969',
            phoneType: 'Mobile',
        },

        {
            displayName: 'AA Gwarzo',
            email: 'aagwarzosportsarena@gmail.com',
            password: 'AAGwarzo4321#',
            localGovernment: 'Wudil',
            location: 'Kano',
            phone: '+2347031140046',
            phoneType: 'Mobile',
        },
        {
            displayName: 'Ibrahim Kabir',
            email: 'khaleelmatic@gmail.com',
            password: 'AAGwarzo4321#',
            localGovernment: 'Kumbotso',
            location: 'Kano',
            phone: '+2347031140046',
            phoneType: 'Mobile',
        },
        {
            displayName: 'Sadiq Beli',
            email: 'ccs03127@gmail.com',
            password: 'Ideas4321#',
            localGovernment: 'Naibawa',
            location: 'Kano',
            phone: '+2347031140046',
            phoneType: 'Mobile',

        }
    ];

    for (const user of users) {
        const photoURL = `https://ui-avatars.com/api/?format=svg&rounded=true&background=random&name=${encodeURIComponent(user.displayName)}`;
        try {
            await createUser(user, photoURL);
        } catch (error) {
            console.error(`Failed to create user ${user.email}:`, error);
        }
    }
}

const createUser = async (userData: UserData, photoURL: string) => {
    try {
        // Create user in Firebase Authentication
        const user = await admin.auth().createUser({
            email: userData.email,
            password: userData.password,
            displayName: userData.displayName,
            photoURL,
        });

        // Store additional user data in Firestore
        await admin.firestore().collection('users').doc(user.uid).set({
            localGovernment: userData.localGovernment,
            location: userData.location,
            phone: userData.phone,
            phoneType: userData.phoneType,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        console.log(`User created and data stored successfully: ${user.email} (UID: ${user.uid})`);
        return user;
    } catch (error) {
        console.error(`Error creating user ${userData.email}:`, error);
        throw error;
    }
};