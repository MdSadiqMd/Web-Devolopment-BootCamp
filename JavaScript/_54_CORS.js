/*
Certainly! Let's explain CORS (Cross-Origin Resource Sharing) with a simple example in plain English.

Imagine you have a website (Website A) that wants to use information from another website (Website B), like grabbing data from a weather service or a news site.

1. Without CORS: Normally, web browsers say, "No way!" They don't allow Website A to directly get information from Website B. This is because browsers follow a rule called the "same-origin policy" to keep things secure. They worry that Website A might do something bad with the data from Website B.

2. CORS to the Rescue: But what if you really want Website A to be able to use Website B's data? That's where CORS comes in. It's like a permission slip that Website B can give to Website A, saying, "You're allowed to use my stuff."

Here's how it works:

- Permission Slip (CORS Headers): Website B sets up a permission slip by adding some special instructions to its responses. These instructions are called CORS headers. They say things like, "Website A is allowed to access my data."

- Asking for Permission (CORS Request): When Website A tries to get data from Website B, the browser first checks if there's a permission slip (CORS headers). If there is one and it says it's okay, the browser lets Website A have the data.

- Safe and Secure: This way, Website B stays in control and can decide who's allowed to use its data. It keeps things safe and prevents bad things from happening.

So, CORS is like a way for websites to talk to each other and share information securely when they have permission, just like showing a ticket to enter an event. It keeps the web safe while allowing different websites to work together.


   User's Browser        Origin A (example.com)      Origin B (api.example.com)
        |                        |                            |
        | --- Request ---------->|                            |
        |                        |                            |
        |                        | --- Pre-flight OPTIONS --->|
        |                        |                            |
        |                        | <--- Response -------------|
        |                        |                            |
        |                        |                            |
        |                        | --- Actual Request ------->|
        |                        |                            |
        |                        | <--- Response -------------|
        | <--- Response ---------|                            |
        |                        |                            |

*/