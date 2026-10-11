# 🌍 WanderLust

### Discover places. Explore stays. Find your next getaway.

WanderLust is a full-stack travel listing web application inspired by platforms for discovering places to stay. Built using **Node.js, Express.js, MongoDB, and EJS**, the project allows users to browse property listings and manage listing information through a simple web interface.

> 🚧 **Project Status: In Development**

I'm actively developing WanderLust and improving its functionality, interface, and overall user experience.

## ✨ Features

### Currently Implemented

- **Browse Listings:** View available property listings.
- **Listing Details:** View individual properties with their information.
- **Create Listings:** Add new properties through a form.
- **Edit Listings:** Update existing listing information.
- **Delete Listings:** Remove listings from the application.
- **Database Integration:** Store and retrieve listing data using MongoDB Atlas.
- **Reusable Layouts:** Use EJS layouts and shared components to keep the interface consistent.
- **Custom Styling:** Style the application using CSS.
- **Asynchronous Route Handling:** Use a reusable wrapper for handling asynchronous route operations.

*Note: Features listed here reflect the implemented code structure; verify each feature in the running application as development continues.*

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend web framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| EJS | Dynamic HTML templating |
| EJS-Mate | Reusable layouts and template blocks |
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| JavaScript | Application logic |
| Method-Override | Support for PUT and DELETE form requests |
| dotenv | Environment variable management |

## 📁 Project Structure

```text
WanderLust/
│
├── init/
│   └── index.js
│
├── models/
│   └── listing.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── utils/
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   └── listings/
│       ├── index.ejs
│       ├── new.ejs
│       ├── edit.ejs
│       └── show.ejs
│
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

Follow these steps to run WanderLust on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### 1. Clone the Repository

```bash
git clone https://github.com/tanishacodes19/WanderLust.git
```

### 2. Navigate to the Project Directory

```bash
cd WanderLust
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
```

Replace the placeholder with your MongoDB Atlas connection string.

Make sure your database credentials are configured correctly and your IP address is allowed in your Atlas network access settings.

**Security note:** Never commit your `.env` file or expose your database credentials on GitHub.

### 5. Initialize Sample Data (Optional)

If you want to populate the database with the project's sample listings, run:

```bash
node init/index.js
```

**Warning:** The initialization script deletes existing listing documents before inserting sample data. Back up any data you want to keep before running it.

### 6. Start the Application

```bash
node app.js
```

Once the server starts and the database connection succeeds, open:

```text
http://localhost:8080
```

## 🛣️ Application Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Display the home route |
| GET | `/listings` | Display all listings |
| GET | `/listings/new` | Display the form to create a listing |
| POST | `/listings` | Create a listing |
| GET | `/listings/:id` | Display an individual listing |
| GET | `/listings/:id/edit` | Display the edit form |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

## 🗄️ Data Model

Each listing uses a Mongoose schema with the following fields:

| Field | Description |
|---|---|
| `title` | Title of the property |
| `description` | Description of the property |
| `image` | Image URL for the property |
| `price` | Property price |
| `location` | Property location |
| `country` | Country where the property is located |

## 🧠 What I'm Learning

Through this project, I'm gaining practical experience with:

- Building server-side applications using Node.js and Express.js.
- Designing RESTful routes for CRUD operations.
- Connecting an application to MongoDB Atlas using Mongoose.
- Rendering dynamic pages with EJS.
- Organizing code into models, views, utilities, and route handlers.
- Managing configuration through environment variables.
- Using Git and GitHub to manage project development.

## 🔮 Future Improvements

The following features are planned as development continues:

- [ ] User registration and login
- [ ] Authentication and authorization
- [ ] Search, filtering, and sorting
- [ ] Reviews and ratings
- [ ] Property image uploads
- [ ] Improved input validation and error pages
- [ ] Responsive UI and accessibility improvements
- [ ] Deployment with a live demo

*Planned features will be marked as completed as they are implemented and tested.*

## 🔒 Security

- Keep database credentials in environment variables.
- Do not commit `.env` or `node_modules/`.
- Validate user input before storing data.
- Configure database access permissions appropriately.

## 👩‍💻 Author

**Tanisha Agarwal**

- GitHub: [@tanishacodes19](https://github.com/tanishacodes19)
- Project Repository: [WanderLust](https://github.com/tanishacodes19/WanderLust)

---

⭐ If you find this project interesting, feel free to explore the repository as development continues.

*Built with curiosity, code, and a love for creating things.*