# forum

Simple forum built with Node.js and MongoDB Atlas.  

## Project tree

.
├── dir1
│   ├── file11.ext
│   └── file12.ext
├── dir2
│   ├── file21.ext
│   ├── file22.ext
│   └── file23.ext
├── dir3
├── file_in_root.ext
└── README.md

## Route design

|    path   | method | get param |         post param        | login needed |         comment         |
|:---------:|:------:|:---------:|:-------------------------:|:------------:|:-----------------------:|
|     /     |   GET  |           |                           |              |     render home page    |
| /register |   GET  |           |                           |              |   render register page  |
| /register |  POST  |           | email, nickname, password |              | handle register request |
|   /login  |   GET  |           |                           |              |    render login page    |
|   /login  |  POST  |           |      email, password      |              |   handle login request  |
|  /logout  |   GET  |           |                           |              |  handle logout request  |
|           |        |           |                           |              |                         |
|           |        |           |                           |              |                         |