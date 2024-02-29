class User {
    constructor() {
    }

    async getUserSelf(accessToken) {
        const BASE_URL = "https://api.uli.fyi/api/v2/users/@me";

        try {
            const response = await fetch(BASE_URL, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch user data. Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            console.error("Error fetching user data:", err);
            throw err; // Rethrow the error for the caller to handle if needed
        }
    }

    async getUserById(accessToken, userId) {
        const BASE_URL = `https://api.uli.fyi/api/v1/users/@me/${userId}?request_by_user_id=true&logged_in=true`;

        try {
            const response = await fetch(BASE_URL, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch user data. Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            console.error("Error fetching user data:", err);
            throw err; // Rethrow the error for the caller to handle if needed
        }
    }
}

module.exports = User;
