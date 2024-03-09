import "./App.css";

//1. Given an array of objects, write a React component to display the details of the cars which have price of 1500000 and above and below 2000001.

const Cars = ({ cars }) => {
  const filteredCars = cars.filter(
    (car) => car.price >= 1500000 && car.price <= 2000000,
  );

  const carListing = filteredCars.map((car) => (
    <div key={car.id}>
      <h2>{car.brand}</h2>
      <p>Price: {car.price}</p>
    </div>
  ));

  return (
    <>
      <h2>Cars</h2>
      {carListing}
    </>
  );
};

//2. Given an array of objects, write a React component to display the details of cafes where the type of the cafe is "Coffee Shop".

const Cafes = ({ cafes }) => {
  const filteredCafes = cafes.filter((cafe) => cafe.type === "Coffee Shop");
  const cafeList = filteredCafes.map((cafe) => (
    <div key={cafe.id}>
      <h3>{cafe.name}</h3>
      <p>Type: {cafe.type}</p>
    </div>
  ));

  return (
    <>
      <h2>Cafes</h2>
      {cafeList}
    </>
  );
};

//3. Given an array of objects, write a React component to display the details of tutorials where the views are more than 4000.

const Tutorial = ({ tutorials }) => {
  const filteredTutorials = tutorials.filter(
    (tutorial) => tutorial.views > 4000,
  );
  const tutorialList = filteredTutorials.map((tutorial) => (
    <div key={tutorial.id}>
      <h3>{tutorial.title}</h3>
      <p>Views: {tutorial.views}</p>
    </div>
  ));
  return (
    <>
      <h2>Tutorials</h2>
      {tutorialList}
    </>
  );
};

//4. Given an array of objects, write a React component to display the details of "Pop" genre albums.

const Albums = ({ albums }) => {
  const filteredAlbum = albums.filter((album) => album.genre === "Pop");
  const albumList = filteredAlbum.map((album) => (
    <div key={album.id}>
      <h3>{album.title}</h3>
      <p>Genre: {album.genre}</p>
    </div>
  ));

  return (
    <>
      <h2>Album</h2>
      {albumList}
    </>
  );
};

//5. Given an array of objects, write a React component to display the details of "Upcoming" events.

const Events = ({ events }) => {
  const upcomingEvents = events.filter((event) => event.status === "Upcoming");
  const eventsList = upcomingEvents.map((event) => (
    <div key={event.id}>
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
    </div>
  ));

  return (
    <>
      <h2>Upcoming Events</h2>
      {eventsList}
    </>
  );
};

//6. Given an array of objects, write a React component to display the tasks where the status is "Open".

const Opentasks = ({ tasks }) => {
  const filteredTasks = tasks.filter((task) => task.status === "Open");
  const tasksList = filteredTasks.map((task) => (
    <div key={task.id}>
      <h3>{task.title}</h3>
      <p>Description: {task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  ));
  return (
    <>
      <h2>Tasks</h2>
      {tasksList}
    </>
  );
};

export default function App() {
  const cars = [
    { id: 1, brand: "Toyota", price: 2000000 },
    { id: 2, brand: "Honda", price: 1800000 },
    { id: 3, brand: "Ford", price: 2500000 },
  ];

  const cafes = [
    { id: 1, name: "Coffee House", type: "Coffee Shop" },
    { id: 2, name: "Java Beans", type: "Café" },
    { id: 3, name: "Brew & Bake", type: "Coffee Shop" },
  ];

  const tutorials = [
    { id: 1, title: "React Basics", views: 7000 },
    { id: 2, title: "JavaScript Fundamentals", views: 4000 },
    { id: 3, title: "Node.js Crash Course", views: 8000 },
  ];

  const albums = [
    { id: 1, title: "Pop Sensation", genre: "Pop" },
    { id: 2, title: "Rhythm and Blues", genre: "R&B" },
    { id: 3, title: "Classic Rock Hits", genre: "Rock" },
  ];

  const events = [
    { id: 1, name: "Tech Conference", date: "2024-06-15", status: "Upcoming" },
    { id: 2, name: "Art Exhibition", date: "2024-07-20", status: "Upcoming" },
    { id: 3, name: "Music Festival", date: "2024-08-10", status: "Past" },
    { id: 4, name: "Dance Festival", date: "2023-09-12", status: "Past" },
  ];

  const tasks = [
    { id: 1, title: "Task 1", description: "Description 1", status: "Open" },
    { id: 2, title: "Task 2", description: "Description 2", status: "Closed" },
    { id: 3, title: "Task 3", description: "Description 3", status: "Open" },
    {
      id: 4,
      title: "Task 4",
      description: "Description 4",
      status: "Not Started",
    },
  ];

  return (
    <main>
      <Cars cars={cars} />
      <hr />
      <Cafes cafes={cafes} />
      <hr />
      <Tutorial tutorials={tutorials} />
      <hr />
      <Albums albums={albums} />
      <hr />
      <Events events={events} />
      <hr />
      <Opentasks tasks={tasks} />
    </main>
  );
}
