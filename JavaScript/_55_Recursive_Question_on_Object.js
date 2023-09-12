// Create a Concise Object with Given Object             
function transformUserToObject(user, prefix = "") {
    let ans = {};
    for (const key in user) {
        if (typeof user[key] === 'object' && !Array.isArray(user[key])) {
            // Recursively generate keys for nested objects
            const newPrefix = prefix ? prefix + '_' + key : key;
            const subObj = transformUserToObject(user[key], newPrefix);
            ans = { ...ans, ...subObj };
        } else {
            // Construct the key by adding the prefix and the current key
            const newKey = prefix ? prefix + '_' + key : key;
            ans[newKey] = user[key];
        }
    }
    return ans;
}

let user = {
    name: "Sadiq",
    address: {
        personal: {
            city: "Vijayawada",
            area: {
                landmark: "Rafi Residency"
            }
        },
        office: {
            city: "Hyderabad",
        }
    }
};

let ans = transformUserToObject(user);
console.log(ans);
