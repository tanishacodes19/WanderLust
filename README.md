# 🌍 WanderLust

### Discover places. Explore stays. Find your next getaway.

WanderLust is a full-stack travel listing web application built with **Node.js, Express.js, MongoDB, and EJS**. It allows users to browse travel accommodations, explore listing details, and manage property listings through a simple web interface.

🔗 **Repository:** [tanishacodes19/WanderLust](https://github.com/tanishacodes19/WanderLust)

---

## ✨ Features

- **Browse Listings** — Explore available travel properties in a card-based interface.
- **View Listing Details** — See a property's title, description, image, price, location, and country.
- **Create Listings** — Add new properties through a form.
- **Edit Listings** — Update existing property information.
- **Delete Listings** — Remove listings from the database.
- **Responsive Styling** — Custom CSS for the application's interface.
- **Reusable Layouts** — Shared EJS layouts, navigation bar, and footer.
- **MongoDB Integration** — Store and retrieve listing data using Mongoose.
- **Asynchronous Error Handling** — A reusable utility for wrapping asynchronous route handlers.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js 5 | Server and routing |
| MongoDB Atlas | Cloud database |
| Mongoose | Database models and queries |
| EJS | Dynamic server-rendered pages |
| EJS-Mate | Layouts and reusable templates |
| Method-Override | PUT and DELETE form requests |
| dotenv | Environment variable configuration |
| HTML, CSS, JavaScript | Frontend and styling |

## 📁 Project Structure

```text
WanderLust/
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   └── listing.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── utils/
│   └── wrapAsync.js
├── views/
│   ├── includes/
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   └── listings/
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

Follow these steps to run WanderLust locally.

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account, or another compatible MongoDB deployment
- Git

### 1. Clone the repository

```bash
git clone https://github.com/tanishacodes19/WanderLust.git
cd WanderLust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
ATLASDB_URL=mongodb+srv://USERNAME:PASSWORD@YOUR_CLUSTER.mongodb.net/wanderlust
```

Replace the placeholders with your own MongoDB Atlas database username, password, and cluster hostname.

Ensure your Atlas database user has the necessary permissions and your current IP address is allowed in Network Access.

**Security:** Never commit `.env` or publish database credentials. Keep `.env` in `.gitignore`.

### 4. Initialize sample data (optional)

To populate the database with the sample listings included in the project, run:

```bash
node init/index.js
```

> **Warning:** The initialization script deletes existing listing documents before inserting the sample data. Run it only when you intend to reset and reload those listings.

### 5. Start the server

```bash
node app.js
```

Once the database connection succeeds, open:

**http://localhost:8080**

## 🧭 Application Routes

| Method | Route | Description |
|---|---|---|
| `GET` | `/` | Root page |
| `GET` | `/listings` | Display all listings |
| `GET` | `/listings/new` | Show the create-listing form |
| `POST` | `/listings` | Create a listing |
| `GET` | `/listings/:id` | View listing details |
| `GET` | `/listings/:id/edit` | Show the edit form |
| `PUT` | `/listings/:id` | Update a listing |
| `DELETE` | `/listings/:id` | Delete a listing |

## 🗄️ Data Model

Each listing is represented by a Mongoose model and can contain:

- `title` — Property name
- `description` — Property details
- `image` — Image URL
- `price` — Listing price
- `location` — Property location
- `country` — Country where the property is located

MongoDB stores the listing documents, while Mongoose defines the model and handles database operations.

## 🧠 What I Learned

This project provides practical experience with:

- Building a server-rendered web application using Express and EJS.
- Implementing CRUD operations.
- Connecting Node.js applications to MongoDB Atlas using Mongoose.
- Organizing views with reusable layouts and partials.
- Handling HTML form submissions and HTTP method overrides.
- Structuring code with reusable asynchronous error-handling utilities.
- Managing project dependencies and environment variables.

## 🔮 Future Improvements

Potential next steps for the project include:

- User authentication and authorization.
- Search, filtering, and sorting of listings.
- Reviews and ratings.
- Image uploads and image storage integration.
- Improved form validation and error pages.
- Deployment with a publicly accessible live demo.
- More extensive mobile and accessibility testing.

## 👩‍💻 Author

**Tanisha Agarwal**

- GitHub: [@tanishacodes19](https://github.com/tanishacodes19)
- Project: [WanderLust](https://github.com/tanishacodes19/WanderLust)

---

*Built as a hands-on full-stack web development project.*