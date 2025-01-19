const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with\nHotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n\n" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "Okay, here's a JSON formatted travel plan for a budget-friendly 3-day trip to Las Vegas for a couple, along with hotel options and a detailed itinerary:\n\n```json\n{\n  \"tripDetails\": {\n    \"location\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"budget\": \"Cheap\",\n    \"travelers\": \"Couple\"\n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n       \"price\": \"$50-90 per night\",\n       \"hotelImageUrl\": \"https://example.com/circus_circus_image.jpg\",\n      \"geoCoordinates\": {\n          \"latitude\": 36.1449,\n          \"longitude\": -115.1681\n        },\n      \"rating\": 3.5,\n      \"description\": \"A classic Las Vegas hotel with a circus theme. Offers affordable rooms and a range of entertainment options, including a circus acts and an indoor amusement park.\"\n    },\n     {\n      \"hotelName\": \"Strat Hotel, Casino & Skypod\",\n      \"hotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"price\": \"$60-100 per night\",\n      \"hotelImageUrl\": \"https://example.com/strat_hotel_image.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1518,\n        \"longitude\": -115.1554\n      },\n      \"rating\": 4.0,\n      \"description\": \"Offers great views of the Strip with an observation deck and thrilling rides. It has multiple dinning options and affordable accommodations.\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$60-110 per night\",\n       \"hotelImageUrl\": \"https://example.com/excalibur_hotel_image.jpg\",\n        \"geoCoordinates\": {\n        \"latitude\": 36.1025,\n        \"longitude\": -115.1724\n      },\n      \"rating\": 3.8,\n      \"description\": \"A medieval-themed hotel with family-friendly entertainment, a pool area, and several dining options at a reasonable price point.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n       \"bestTimeToVisit\": \"Morning/Afternoon\",\n      \"theme\": \"Exploring the Strip (South End)\",\n      \"places\": [\n        {\n          \"placeName\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"placeDetails\": \"Iconic landmark, perfect for photos. A must-see when in Vegas.\",\n            \"placeImageUrl\": \"https://example.com/welcome_sign.jpg\",\n          \"geoCoordinates\": {\n              \"latitude\": 36.0828,\n              \"longitude\": -115.1727\n            },\n          \"ticketPricing\": \"Free\",\n           \"timeToTravel\": \"0 Min - Start point\"\n        },\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n           \"placeDetails\": \"Beautiful seasonal display of flowers and plants, located inside the Bellagio Hotel.\",\n            \"placeImageUrl\": \"https://example.com/bellagio_gardens.jpg\",\n             \"geoCoordinates\": {\n              \"latitude\": 36.1126,\n              \"longitude\": -115.1739\n             },\n          \"ticketPricing\": \"Free\",\n           \"timeToTravel\": \"10 mins from Welcome Sign\"\n        },\n        {\n          \"placeName\": \"Fountains of Bellagio\",\n          \"placeDetails\": \"Spectacular water show with music, runs multiple times a day and night.\",\n           \"placeImageUrl\": \"https://example.com/bellagio_fountains.jpg\",\n            \"geoCoordinates\": {\n              \"latitude\": 36.1128,\n              \"longitude\": -115.1742\n            },\n          \"ticketPricing\": \"Free\",\n           \"timeToTravel\": \"2 mins from Bellagio Gardens\"\n        },\n         {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"Outdoor shopping, dining, and entertainment area with the High Roller observation wheel.\",\n          \"placeImageUrl\": \"https://example.com/linq_promenade.jpg\",\n             \"geoCoordinates\": {\n              \"latitude\": 36.1165,\n              \"longitude\": -115.1694\n             },\n          \"ticketPricing\": \"Free to walk around (charges for attractions)\",\n             \"timeToTravel\": \"10 mins from Bellagio Fountains\"\n        },\n           {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Enjoy a slow moving ride in the giant observation wheel. A great way to enjoy Las Vegas Strip\",\n           \"placeImageUrl\": \"https://example.com/high_roller.jpg\",\n              \"geoCoordinates\": {\n                 \"latitude\": 36.1178,\n                 \"longitude\": -115.1694\n              },\n          \"ticketPricing\": \"$25-35 per person\",\n            \"timeToTravel\": \"2 min walk from LINQ Promenade\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"bestTimeToVisit\": \"Morning/Afternoon\",\n      \"theme\": \"Downtown Las Vegas & Fremont Street\",\n      \"places\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Pedestrian mall with a canopy of LED lights, known for light shows and street performers.\",\n          \"placeImageUrl\": \"https://example.com/fremont_street.jpg\",\n           \"geoCoordinates\": {\n                \"latitude\": 36.1698,\n                \"longitude\": -115.1401\n              },\n          \"ticketPricing\": \"Free\",\n             \"timeToTravel\": \"20-25 mins from The Strip\"\n        },\n          {\n            \"placeName\": \"Mob Museum\",\n            \"placeDetails\": \"Museum dedicated to the history of organized crime in America.\",\n             \"placeImageUrl\": \"https://example.com/mob_museum.jpg\",\n             \"geoCoordinates\": {\n               \"latitude\": 36.1685,\n                \"longitude\": -115.1411\n               },\n            \"ticketPricing\": \"$29.95 per person\",\n               \"timeToTravel\": \"2 mins from Fremont Street Experience\"\n          },\n          {\n            \"placeName\": \"Container Park\",\n            \"placeDetails\": \"Unique outdoor shopping and dining area made from shipping containers.\",\n             \"placeImageUrl\": \"https://example.com/container_park.jpg\",\n             \"geoCoordinates\": {\n                  \"latitude\": 36.1683,\n                  \"longitude\": -115.1377\n                },\n            \"ticketPricing\": \"Free to enter (charges for shops and restaurants)\",\n             \"timeToTravel\": \"5 mins walk from Mob Museum\"\n          }\n      ]\n    },\n    \"day3\": {\n      \"bestTimeToVisit\": \"Morning\",\n      \"theme\": \"Nature & Relaxation\",\n      \"places\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n           \"placeDetails\": \"Scenic desert landscape with hiking trails and rock formations.\",\n           \"placeImageUrl\": \"https://example.com/red_rock_canyon.jpg\",\n              \"geoCoordinates\": {\n                  \"latitude\": 36.1366,\n                  \"longitude\": -115.4117\n                },\n          \"ticketPricing\": \"$15 per vehicle\",\n             \"timeToTravel\": \"25-30 mins drive from downtown\"\n        },\n        {\n          \"placeName\": \"The Venetian Hotel Gondola Rides\",\n           \"placeDetails\":\"Enjoy the ride in the unique gondola and see the view.\",\n            \"placeImageUrl\": \"https://example.com/venetian_gondola.jpg\",\n            \"geoCoordinates\": {\n                 \"latitude\": 36.1214,\n                  \"longitude\": -115.1699\n                },\n           \"ticketPricing\": \"$35-45 per person\",\n             \"timeToTravel\": \"40 -50 mins from Red Rock Canyon\"\n        },\n          {\n            \"placeName\":\"Eiffel Tower Viewing Deck at Paris Las Vegas\",\n            \"placeDetails\":\"Visit the Eiffel tower viewing deck and enjoy a beautiful view of Las Vegas.\",\n             \"placeImageUrl\":\"https://example.com/eiffel_tower_las_vegas.jpg\",\n                \"geoCoordinates\": {\n                   \"latitude\": 36.1098,\n                   \"longitude\": -115.1707\n                  },\n            \"ticketPricing\":\"$25-30 per person\",\n               \"timeToTravel\":\"5 mins from Venetian Hotel\"\n          }\n\n      ]\n    }\n  }\n}\n```\n\n**Important Notes:**\n\n*   **Prices:** Hotel and ticket prices are approximate and can vary based on the season and availability. Always check the latest prices before booking.\n*   **Transportation:** This itinerary assumes you are using ride-sharing services, public transport, or walking. Consider the cost of transportation when planning your budget.\n*  **Food**: Try to make your food cost low by choosing food trucks or by buying from the supermarkets.\n*   **Flexibility:** This is just a suggestion, feel free to customize it based on your interests and preferences.\n*   **Image URLs:** The image URLs are placeholders. You will need to replace these with actual URLs.\n*   **Book in Advance:** Especially during peak season, it is advisable to book your hotel and any desired shows or attractions in advance.\n\nThis itinerary focuses on free or low-cost activities, offering a balance of iconic Vegas experiences, historical insights, and natural beauty. Enjoy your trip!\n" },
            ],
        },
    ],
});

