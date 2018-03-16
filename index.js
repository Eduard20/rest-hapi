
const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const Routes = [];

Routes.push({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return h.redirect('/documentation')
    }
});

Routes.push({
    method: 'GET',
    path: '/api/users/:user-id',
    config: {
        handler: (request, h) => {
            return {
                meta: {
                    status: "200"
                },
                data: {
                    "userId": "1574083",
                    "fullName": "Manvel Khnkoyan",
                    "country": "US",
                    "ageGroup": "<17",
                    "gender": "Male",
                    "image": "https://images.projectcarmen.com/resource/avatar/58e0bd1a30dd16f62164b653.jpg",
                    "location": "campus: 'ADELPHI' -or- city: 'Yerevan'",
                    "lastActiveTime": "1520322697",
                    "counts": {
                        "follows": 420,
                        "followedBy": 3410
                    }
                },
                pagination: {
                    next_url: "https://ws.projectcarmen.com/api/users/:user-id?q=rih&page=2"
                }
            }
        },
        description: 'Get User Info',
        notes: 'Returns user info',
        tags: ['api', 'users'], // ADD THIS TAG
    }
});

Routes.push({
    method: 'GET',
    path: '/api/users/search',
    config: {
        handler: (request, h) => {
            return {
                meta: {
                    status: "200"
                },
                data: [{
                    userId: "78052",
                    fullName: "Manvel Khnkoyan",
                    country: "US",
                    location: "campus: 'ADELPHI' -or- city: 'Yerevan'",
                    ageGroup: "<17",
                    gender: "Male",
                    image: "https://images.projectcarmen.com/resource/avatar/58e0bd1a30dd16f62164b653.jpg",
                    lastActiveTime: "1520322697",
                },
                    {
                        userId: "78052",
                        fullName: "Manvel Khnkoyan",
                        country: "US",
                        location: "campus: 'ADELPHI' -or- city: 'Yerevan'",
                        ageGroup: "<17",
                        gender: "Male",
                        image: "https://images.projectcarmen.com/resource/avatar/58e0bd1a30dd16f62164b653.jpg",
                        lastActiveTime: "1520322697"
                    }],
                pagination: {
                    next_url: "https://ws.projectcarmen.com/api/users/search?q=rih&page=2"
                }
            }
        },
        description: 'Search users',
        notes: 'Returns a list of users',
        tags: ['api', 'users'], // ADD THIS TAG
    }
});

Routes.push({
    method: 'GET',
    path: '/api/users/:user-id/relationship',
    config: {
        handler: (request, h) => {
            return {
                meta: {
                    status: "200"
                },
                data: {
                    "outgoing_status": "none", // "follows"
                    "incoming_status": "none" // "followed_by"
                },
                pagination: {
                    next_url: "https://ws.projectcarmen.com/api/users/search?q=rih&page=2"
                }
            }
        },
        description: 'Get User Relation',
        notes: 'Returns a relation',
        tags: ['api', 'users'], // ADD THIS TAG
    }
});

Routes.push({
    method: 'GET',
    path: '/api/users/:user-id/follows',
    config: {
        handler: (request, h) => {
            return {
                meta: {
                    status: "200"
                },
                data: [{
                    "image": "http://images.ak.instagram.com/profiles/profile_3_75sq_1325536697.jpg",
                    "full_name": "Kevin Systrom",
                    "user_id": "3",
                    "location": "campus: 'ADELPHI' -or- city: 'Yerevan'"
                },
                    {
                        "image": "http://images.ak.instagram.com/profiles/profile_25025320_75sq_1340929272.jpg",
                        "full_name": "Trebel",
                        "user_id": "25025320",
                        "location": "campus: 'ADELPHI' -or- city: 'Yerevan'"
                    }
                ],
                pagination: {
                    next_url: "https://ws.projectcarmen.com/api/users/search?q=rih&page=2"
                }
            }
        },
        description: 'Get User Followings list',
        notes: 'Returns users list',
        tags: ['api', 'users'], // ADD THIS TAG
    }
});

Routes.push({
    method: 'GET',
    path: '/api/users/:user-id/followings',
    config: {
        handler: (request, h) => {
            return {
                meta: {
                    status: "200"
                },
                data: [{
                    "image": "http://images.ak.instagram.com/profiles/profile_3_75sq_1325536697.jpg",
                    "full_name": "Kevin Systrom",
                    "user_id": "3",
                    "location": "campus: 'ADELPHI' -or- city: 'Yerevan'"
                },
                    {
                        "image": "http://images.ak.instagram.com/profiles/profile_25025320_75sq_1340929272.jpg",
                        "full_name": "Trebel",
                        "user_id": "25025320",
                        "location": "campus: 'ADELPHI' -or- city: 'Yerevan'"
                    }
                ],
                pagination: {
                    next_url: "https://ws.projectcarmen.com/api/users/search?q=rih&page=2"
                }
            }
        },
        description: 'Get User Followers',
        notes: 'Returns users list',
        tags: ['api', 'users'], // ADD THIS TAG
    }
});

Routes.push({
    method: 'GET',
    path: '/api/users/:user-id/feed',
    config: {
        handler: (request, h) => {
            return {
                meta: {
                    status: "200"
                },
                data: [{
                    "type": "played",
                    "id": "37382152",
                    "name": "Stay With Me",
                    "artist": "Sam Smith",
                    "time": "1419939721",
                    "genre": "Pop"
                }],
                pagination: {
                    next_url: "https://ws.projectcarmen.com/api/users/search?q=rih&page=2"
                }
            }
        },
        description: 'Get User Feed',
        notes: 'Returns feeds list',
        tags: ['api', 'users'], // ADD THIS TAG
    }
});

Routes.push({
    method: 'GET',
    path: '/api/users/:user-id/playlists',
    config: {
        handler: (request, h) => {
            return {
                meta: {
                    status: "200"
                },
                data: [{
                    "ID": "71795-downloaded",
                    "category": "",
                    "name": "Downloads",
                    "count": "724"
                }, {
                        "ID": "71795-played",
                        "category": "",
                        "name": "Top Played",
                        "count": "324"
                    }
                ],
                pagination: {
                    next_url: "https://ws.projectcarmen.com/api/users/search?q=rih&page=2"
                }
            }
        },
        description: 'Get User Feed',
        notes: 'Returns feeds list',
        tags: ['api', 'users'], // ADD THIS TAG
    }
});


(async () => {
    const server = await new Hapi.Server({
        host: process.env.HOST || process.env.HOSTNAME,
        port: parseInt(process.env.PORT) || 3000
    });

    const swaggerOptions = {
        info: {
            title: 'Test API Documentation',
            version: "0.0.1",
        }
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch(err) {
        console.log(err);
    }

    server.route(Routes);
})();

