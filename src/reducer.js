export const initialState = {
  user: null,
  token: null,
  // token:
  //   "BQDjK1lYwuROmt4dUnWHw7qmC15G7PKiXA7OGpLCJNxzOoX4WDTOD5VtRX5E8cKd8SHNaXXUy7UH_dFTxDySq5xPddSiTsL5J6zrufCH3kc1OBdaaHZIZPWLJG30mt9c-bRQERdL832KbWM",
  playlists: [],
  //   playlists: [
  //     {
  //         "collaborative": false,
  //         "description": "",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/4iv0caZqFgTg8JnnpoqHGk"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/4iv0caZqFgTg8JnnpoqHGk",
  //         "id": "4iv0caZqFgTg8JnnpoqHGk",
  //         "images": [
  //             {
  //                 "height": 640,
  //                 "url": "https://i.scdn.co/image/ab67616d0000b27308fab679c71498e5359ee8c6",
  //                 "width": 640
  //             }
  //         ],
  //         "name": "Miguel Bose",
  //         "owner": {
  //             "display_name": "Miguel José Arreaza Díaz",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/mg.arreaza.13"
  //             },
  //             "href": "https://api.spotify.com/v1/users/mg.arreaza.13",
  //             "id": "mg.arreaza.13",
  //             "type": "user",
  //             "uri": "spotify:user:mg.arreaza.13"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MixjNGQ0MTljZDBmZGJjYTBmMGNlNjE0NDlhOTczNzNmMjNmOWMzODU5",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/4iv0caZqFgTg8JnnpoqHGk/tracks",
  //             "total": 16
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:4iv0caZqFgTg8JnnpoqHGk"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/33fzkoFFrejXNpoN8Jfcdb"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/33fzkoFFrejXNpoN8Jfcdb",
  //         "id": "33fzkoFFrejXNpoN8Jfcdb",
  //         "images": [
  //             {
  //                 "height": 640,
  //                 "url": "https://i.scdn.co/image/ab67616d0000b2737d0f277681e04a2434f63afb",
  //                 "width": 640
  //             }
  //         ],
  //         "name": "Bien Frank Quintero",
  //         "owner": {
  //             "display_name": "Miguel José Arreaza Díaz",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/mg.arreaza.13"
  //             },
  //             "href": "https://api.spotify.com/v1/users/mg.arreaza.13",
  //             "id": "mg.arreaza.13",
  //             "type": "user",
  //             "uri": "spotify:user:mg.arreaza.13"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "Miw1ODQ1NWMxNWY4NmUxZTgyODE0MGJiMTEwNzYwMmQ4YzE4OGFkZTVi",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/33fzkoFFrejXNpoN8Jfcdb/tracks",
  //             "total": 13
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:33fzkoFFrejXNpoN8Jfcdb"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/2CVSEfVzF43CdsnlSHp2RZ"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/2CVSEfVzF43CdsnlSHp2RZ",
  //         "id": "2CVSEfVzF43CdsnlSHp2RZ",
  //         "images": [
  //             {
  //                 "height": 640,
  //                 "url": "https://mosaic.scdn.co/640/ab67616d0000b2730f1e9d11c5fc840c151c2e72ab67616d0000b27386afd6f8f6007e35cc882d2dab67616d0000b273af4acb77d1a4b71f7f4a67d2ab67616d0000b273f88fd1643af3bf86a3a2ae09",
  //                 "width": 640
  //             },
  //             {
  //                 "height": 300,
  //                 "url": "https://mosaic.scdn.co/300/ab67616d0000b2730f1e9d11c5fc840c151c2e72ab67616d0000b27386afd6f8f6007e35cc882d2dab67616d0000b273af4acb77d1a4b71f7f4a67d2ab67616d0000b273f88fd1643af3bf86a3a2ae09",
  //                 "width": 300
  //             },
  //             {
  //                 "height": 60,
  //                 "url": "https://mosaic.scdn.co/60/ab67616d0000b2730f1e9d11c5fc840c151c2e72ab67616d0000b27386afd6f8f6007e35cc882d2dab67616d0000b273af4acb77d1a4b71f7f4a67d2ab67616d0000b273f88fd1643af3bf86a3a2ae09",
  //                 "width": 60
  //             }
  //         ],
  //         "name": "Hip Hop",
  //         "owner": {
  //             "display_name": "Miguel José Arreaza Díaz",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/mg.arreaza.13"
  //             },
  //             "href": "https://api.spotify.com/v1/users/mg.arreaza.13",
  //             "id": "mg.arreaza.13",
  //             "type": "user",
  //             "uri": "spotify:user:mg.arreaza.13"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTIsMDQzOGNiMDgyNGFmM2EzNDJhY2ZiZGNlYzMzNjUwYzlmZjg3MDliNQ==",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/2CVSEfVzF43CdsnlSHp2RZ/tracks",
  //             "total": 10
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:2CVSEfVzF43CdsnlSHp2RZ"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/5a0wugrQhhc7uuQ4gKg8zl"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/5a0wugrQhhc7uuQ4gKg8zl",
  //         "id": "5a0wugrQhhc7uuQ4gKg8zl",
  //         "images": [
  //             {
  //                 "height": 640,
  //                 "url": "https://i.scdn.co/image/ab67616d0000b273c45522c9b302fab53e04d0d7",
  //                 "width": 640
  //             }
  //         ],
  //         "name": "Voz Veis – Virao",
  //         "owner": {
  //             "display_name": "Miguel José Arreaza Díaz",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/mg.arreaza.13"
  //             },
  //             "href": "https://api.spotify.com/v1/users/mg.arreaza.13",
  //             "id": "mg.arreaza.13",
  //             "type": "user",
  //             "uri": "spotify:user:mg.arreaza.13"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MyxhZTEyZTA4NjUwODYzMzA5MWFiMDE1MDNjNGRiNzYxZDRlMWZhNWE4",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/5a0wugrQhhc7uuQ4gKg8zl/tracks",
  //             "total": 11
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:5a0wugrQhhc7uuQ4gKg8zl"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/5cNTRlJNiu8JtQ2f175jAS"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/5cNTRlJNiu8JtQ2f175jAS",
  //         "id": "5cNTRlJNiu8JtQ2f175jAS",
  //         "images": [
  //             {
  //                 "height": 640,
  //                 "url": "https://i.scdn.co/image/ab67616d0000b273d267052498c2252e009c2d68",
  //                 "width": 640
  //             }
  //         ],
  //         "name": "Voz Veis – Vas",
  //         "owner": {
  //             "display_name": "Miguel José Arreaza Díaz",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/mg.arreaza.13"
  //             },
  //             "href": "https://api.spotify.com/v1/users/mg.arreaza.13",
  //             "id": "mg.arreaza.13",
  //             "type": "user",
  //             "uri": "spotify:user:mg.arreaza.13"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MyxhYmJkZTczYzZjYzAzNWM4MjNkNGI5MjdiOTNhNjJiOGZkZTY0MTg0",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/5cNTRlJNiu8JtQ2f175jAS/tracks",
  //             "total": 12
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:5cNTRlJNiu8JtQ2f175jAS"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/0cx91wQrnGannDUSwojL5Z"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/0cx91wQrnGannDUSwojL5Z",
  //         "id": "0cx91wQrnGannDUSwojL5Z",
  //         "images": [
  //             {
  //                 "height": 640,
  //                 "url": "https://i.scdn.co/image/ab67616d0000b2735f1df1241e0c165f2b701cf2",
  //                 "width": 640
  //             }
  //         ],
  //         "name": "Voz Veis – Todos a Belén",
  //         "owner": {
  //             "display_name": "Miguel José Arreaza Díaz",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/mg.arreaza.13"
  //             },
  //             "href": "https://api.spotify.com/v1/users/mg.arreaza.13",
  //             "id": "mg.arreaza.13",
  //             "type": "user",
  //             "uri": "spotify:user:mg.arreaza.13"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MywwZTAxY2QxZGUzOTZiZGNlODM0MWE1OTQ4ZmY3MThjZGZjODRlZTVm",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/0cx91wQrnGannDUSwojL5Z/tracks",
  //             "total": 11
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:0cx91wQrnGannDUSwojL5Z"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/2kfO6g15lIa9iNQfpL3Uqu"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/2kfO6g15lIa9iNQfpL3Uqu",
  //         "id": "2kfO6g15lIa9iNQfpL3Uqu",
  //         "images": [
  //             {
  //                 "height": 640,
  //                 "url": "https://mosaic.scdn.co/640/ab67616d0000b2734219850b8eb5a17cfe76a3deab67616d0000b27342503d499ffe2c773de28d70ab67616d0000b2734277da4c011dcc87f012bbabab67616d0000b2735de03ceedaf45611646b2a82",
  //                 "width": 640
  //             },
  //             {
  //                 "height": 300,
  //                 "url": "https://mosaic.scdn.co/300/ab67616d0000b2734219850b8eb5a17cfe76a3deab67616d0000b27342503d499ffe2c773de28d70ab67616d0000b2734277da4c011dcc87f012bbabab67616d0000b2735de03ceedaf45611646b2a82",
  //                 "width": 300
  //             },
  //             {
  //                 "height": 60,
  //                 "url": "https://mosaic.scdn.co/60/ab67616d0000b2734219850b8eb5a17cfe76a3deab67616d0000b27342503d499ffe2c773de28d70ab67616d0000b2734277da4c011dcc87f012bbabab67616d0000b2735de03ceedaf45611646b2a82",
  //                 "width": 60
  //             }
  //         ],
  //         "name": "Manuel Medrano — Bajo el agua",
  //         "owner": {
  //             "display_name": "Diana Pesk JD",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/diana.pesk"
  //             },
  //             "href": "https://api.spotify.com/v1/users/diana.pesk",
  //             "id": "diana.pesk",
  //             "type": "user",
  //             "uri": "spotify:user:diana.pesk"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MzUsNzYwNjdhYmU5Y2VlYmY2OGEyMTQxOTdjZGIwZjVjZWQ1ZjI5MDYzMg==",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/2kfO6g15lIa9iNQfpL3Uqu/tracks",
  //             "total": 33
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:2kfO6g15lIa9iNQfpL3Uqu"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "The best tunes in jazz history. Cover: Billie Holiday",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbITWG1ZJKYt",
  //         "id": "37i9dQZF1DXbITWG1ZJKYt",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f00000003c7f0907c5695f95f16e4eaf2",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Jazz Classics",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTUzOTA4OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbITWG1ZJKYt/tracks",
  //             "total": 100
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DXbITWG1ZJKYt"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "Where jazz meets electronic music. Cover: Kiefer",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX55dNU0PWnO5"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX55dNU0PWnO5",
  //         "id": "37i9dQZF1DX55dNU0PWnO5",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f0000000347a2871c4e20e58193d57a67",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Jazztronica",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTUzOTA4OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX55dNU0PWnO5/tracks",
  //             "total": 50
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DX55dNU0PWnO5"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "Relax to the sound of jazz.",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVqfgj8NZEp1"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVqfgj8NZEp1",
  //         "id": "37i9dQZF1DWVqfgj8NZEp1",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f000000038df7fedfed909f10628586fe",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Coffee Table Jazz",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTE1MDQ2MCwwMDAwMDA2ZjAwMDAwMTc4ZmNlMzU0ZjQwMDAwMDE2ZDAwY2EyYTc2",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVqfgj8NZEp1/tracks",
  //             "total": 147
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DWVqfgj8NZEp1"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "Experience the powerful messages and sounds of these gospel tunes.",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7OIddoQVdRt"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7OIddoQVdRt",
  //         "id": "37i9dQZF1DX7OIddoQVdRt",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f00000003a88ac8a27dd714bacc2d9ddd",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Spread the Gospel",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTUzOTA4OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7OIddoQVdRt/tracks",
  //             "total": 40
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DX7OIddoQVdRt"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "The best mix of today's Christian music worldwide.  Cover: Crowder",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcb6CQIjdqKy"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcb6CQIjdqKy",
  //         "id": "37i9dQZF1DXcb6CQIjdqKy",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f000000038169851013fda33f40de3118",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Top Christian",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTE1MzIyMiwwMDAwMDRmNDAwMDAwMTc4ZmQwZDdiM2QwMDAwMDE3OGZjOThiNDQ5",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcb6CQIjdqKy/tracks",
  //             "total": 100
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DXcb6CQIjdqKy"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "Celebrate LOVE with this playlist of classic love songs and discover some new favorites!",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/3wI0prya1veVHKQOtLbmxB"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/3wI0prya1veVHKQOtLbmxB",
  //         "id": "3wI0prya1veVHKQOtLbmxB",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706c0000bebb7d8321db6efb9a1767a956ae",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Crazy In Love",
  //         "owner": {
  //             "display_name": "Topsify US",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/warnermusicus"
  //             },
  //             "href": "https://api.spotify.com/v1/users/warnermusicus",
  //             "id": "warnermusicus",
  //             "type": "user",
  //             "uri": "spotify:user:warnermusicus"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MjIwMiw2YzMxNzBkMWEzZGRjNWFiYzQzYzBjYjkyNDBlOGQ0NWYwOWZhMzNi",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/3wI0prya1veVHKQOtLbmxB/tracks",
  //             "total": 80
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:3wI0prya1veVHKQOtLbmxB"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "Because we all deserve great pop love songs in one playlist.",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX50QitC6Oqtn"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX50QitC6Oqtn",
  //         "id": "37i9dQZF1DX50QitC6Oqtn",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f00000003505e19aaff29a5dc3bc2503c",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Love Pop",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTUzOTA4OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX50QitC6Oqtn/tracks",
  //             "total": 100
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DX50QitC6Oqtn"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "Nurse your emotional wounds with these heartbreak tracks.",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbrUpGvoi3TS"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbrUpGvoi3TS",
  //         "id": "37i9dQZF1DXbrUpGvoi3TS",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f0000000350f34f0e7a0b73effe02fa6f",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Broken Heart",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTUzOTA4OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbrUpGvoi3TS/tracks",
  //             "total": 100
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DXbrUpGvoi3TS"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "Songs to soundtrack your love story, from butterflies and first kisses to bittersweet memories and everything in between.",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSlwBojgQEcN"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSlwBojgQEcN",
  //         "id": "37i9dQZF1DWSlwBojgQEcN",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f0000000354bcabc059f2478d5e00c19d",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Acoustic Love",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTUzOTA4OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSlwBojgQEcN/tracks",
  //             "total": 100
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DWSlwBojgQEcN"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "A relaxing atmosphere of jazz piano sounds.",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVvXA824aCbn"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVvXA824aCbn",
  //         "id": "37i9dQZF1DWVvXA824aCbn",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f00000003ce495a3fb2e01db25f755da0",
  //                 "width": null
  //             }
  //         ],
  //         "name": "The Piano Bar",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTUzOTA4OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVvXA824aCbn/tracks",
  //             "total": 75
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DWVvXA824aCbn"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "Slow jams for the passionate.",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0QKpU3cGsyb"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0QKpU3cGsyb",
  //         "id": "37i9dQZF1DX0QKpU3cGsyb",
  //         "images": [
  //             {
  //                 "height": null,
  //                 "url": "https://i.scdn.co/image/ab67706f000000039fec2373847cde79dcdba5b5",
  //                 "width": null
  //             }
  //         ],
  //         "name": "Bedroom Jams",
  //         "owner": {
  //             "display_name": "Spotify",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/spotify"
  //             },
  //             "href": "https://api.spotify.com/v1/users/spotify",
  //             "id": "spotify",
  //             "type": "user",
  //             "uri": "spotify:user:spotify"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTYxOTE1MDQwMCwwMDAwMDQ2NzAwMDAwMTc4ZmNlMjZhYzcwMDAwMDE2ZDE1NTk4OWUy",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0QKpU3cGsyb/tracks",
  //             "total": 70
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:37i9dQZF1DX0QKpU3cGsyb"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/6EsZ2yLd3nqsWuhD7LOsRS"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/6EsZ2yLd3nqsWuhD7LOsRS",
  //         "id": "6EsZ2yLd3nqsWuhD7LOsRS",
  //         "images": [
  //             {
  //                 "height": 640,
  //                 "url": "https://i.scdn.co/image/ab67616d0000b273f46930fb3430b95abe4e935f",
  //                 "width": 640
  //             }
  //         ],
  //         "name": "Issues – Headspace",
  //         "owner": {
  //             "display_name": "Miguel José Arreaza Díaz",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/mg.arreaza.13"
  //             },
  //             "href": "https://api.spotify.com/v1/users/mg.arreaza.13",
  //             "id": "mg.arreaza.13",
  //             "type": "user",
  //             "uri": "spotify:user:mg.arreaza.13"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MyxlODUzY2UzNzYyNDY5YWFjNjVjOTM3YTVhMDMyNTAyZGIyMzNiOWQx",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/6EsZ2yLd3nqsWuhD7LOsRS/tracks",
  //             "total": 13
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:6EsZ2yLd3nqsWuhD7LOsRS"
  //     },
  //     {
  //         "collaborative": false,
  //         "description": "",
  //         "external_urls": {
  //             "spotify": "https://open.spotify.com/playlist/1rNyooVTioJJcNPnXiZNj6"
  //         },
  //         "href": "https://api.spotify.com/v1/playlists/1rNyooVTioJJcNPnXiZNj6",
  //         "id": "1rNyooVTioJJcNPnXiZNj6",
  //         "images": [
  //             {
  //                 "height": 640,
  //                 "url": "https://mosaic.scdn.co/640/ab67616d0000b2738195fefecfd1ba1918971352ab67616d0000b273e99ed9e0b1947329903ffc84ab67616d0000b273eae22afe34b4436302956db4ab67616d0000b273f5b5b9179707a2eabbd4c097",
  //                 "width": 640
  //             },
  //             {
  //                 "height": 300,
  //                 "url": "https://mosaic.scdn.co/300/ab67616d0000b2738195fefecfd1ba1918971352ab67616d0000b273e99ed9e0b1947329903ffc84ab67616d0000b273eae22afe34b4436302956db4ab67616d0000b273f5b5b9179707a2eabbd4c097",
  //                 "width": 300
  //             },
  //             {
  //                 "height": 60,
  //                 "url": "https://mosaic.scdn.co/60/ab67616d0000b2738195fefecfd1ba1918971352ab67616d0000b273e99ed9e0b1947329903ffc84ab67616d0000b273eae22afe34b4436302956db4ab67616d0000b273f5b5b9179707a2eabbd4c097",
  //                 "width": 60
  //             }
  //         ],
  //         "name": "suave",
  //         "owner": {
  //             "display_name": "Miguel José Arreaza Díaz",
  //             "external_urls": {
  //                 "spotify": "https://open.spotify.com/user/mg.arreaza.13"
  //             },
  //             "href": "https://api.spotify.com/v1/users/mg.arreaza.13",
  //             "id": "mg.arreaza.13",
  //             "type": "user",
  //             "uri": "spotify:user:mg.arreaza.13"
  //         },
  //         "primary_color": null,
  //         "public": true,
  //         "snapshot_id": "MTEsOWI3MTE3MDk4Y2JmMWMxN2RkZmM2NWI1ZGVhYjkzZGYyNjRkNDZmZg==",
  //         "tracks": {
  //             "href": "https://api.spotify.com/v1/playlists/1rNyooVTioJJcNPnXiZNj6/tracks",
  //             "total": 9
  //         },
  //         "type": "playlist",
  //         "uri": "spotify:playlist:1rNyooVTioJJcNPnXiZNj6"
  //     }
  // ],
  playing: false,
  item: null,
  discover_weekly: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      break;
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      break;
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
