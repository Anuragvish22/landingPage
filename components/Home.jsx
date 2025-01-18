import { useState } from "react";
import { Link } from "react-router-dom";

const localities = [
  { name: "Lower Parel", places: "493 places" },
  { name: "Powai", places: "443 places" },
  { name: "Malad West", places: "961 places" },
  { name: "Borivali West", places: "691 places" },
  { name: "Bandra Kurla Complex", places: "161 places" },
  { name: "Vashi", places: "667 places" },
  { name: "Fort", places: "291 places" },
  { name: "Juhu", places: "251 places" },
];

const collections = [
  {
    title: "Top Trending Spots",
    places: "33 Places",
    image: "/trending.jpg",
  },
  {
    title: "Best Insta-worthy Places",
    places: "28 Places",
    image: "/insta.jpg",
  },
  {
    title: "Newly Opened Places",
    places: "29 Places",
    image: "/newly.jpg",
  },
  {
    title: "Strawberry Sweet Treats",
    places: "11 Places",
    image: "/cake.jpg",
  },
];

const sections = [
  {
    id: "cuisines",
    title: "Popular Cuisines Near Me",
    content: ["Italian", "Chinese", "Indian", "Thai", "Mexican"],
  },
  {
    id: "types",
    title: "Popular Restaurant Types Near me",
    content: [
      "Cafe",
      "Fast Food",
      "Fine Dining",
      "Casual Dining",
      "Food Court",
    ],
  },
  {
    id: "chains",
    title: "Top Restaurant Chains",
    content: ["McDonald's", "KFC", "Subway", "Domino's", "Pizza Hut"],
  },
  {
    id: "cities",
    title: "Cities We Deliver To",
    content: ["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"],
  },
];

const Home = () => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute w-full z-10 flex justify-between items-center px-4 md:px-20 py-4 text-white">
        <button className="text-sm font-medium">Get the App</button>
        <nav className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium">
            Investor Relations
          </a>
          <a href="#" className="text-sm font-medium">
            Add restaurant
          </a>
          <a href="#" className="text-sm font-medium">
            Log in
          </a>
          <a href="#" className="text-sm font-medium">
            Sign up
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center justify-center text-white">
        <img
          src="/Zw.jpg"
          alt="Food background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 flex flex-col items-center max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-8 text-center">
            Discover the best food & drinks in Mumbai
          </h1>
          <div className="flex w-full max-w-3xl bg-white rounded-lg">
            <div className="flex items-center gap-2 px-4 py-3 border-r border-gray-300">
              <span className="text-red-500">📍</span>
              <input
                type="text"
                placeholder="Empire Mills Complex Buil"
                className="bg-transparent text-gray-700 focus:outline-none w-48"
              />
              <span className="text-gray-400">▼</span>
            </div>
            <div className="flex items-center flex-1 gap-2 px-4">
              <span className="text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full bg-transparent text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Types */}
      <section className="container mx-auto py-12 px-4 w-[80vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="https://www.zomato.com/mumbai/delivery?delivery_subzone=10097"
            target="_blank"
            className="rounded-lg overflow-hidden shadow-md"
          >
            <img
              src="/orderOnline.jpg"
              alt="Order Online"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Order Online</h3>
              <p className="text-gray-600">
                Stay home and order to your doorstep
              </p>
            </div>
          </a>
          <a
            href="https://www.zomato.com/mumbai/restaurants"
            target="_blank"
            className="rounded-lg overflow-hidden shadow-md"
          >
            <img
              src="/dining.jpg"
              alt="Dining"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Dining</h3>
              <p className="text-gray-600">
                View the city's favourite dining venues
              </p>
            </div>
          </a>
          <a
            href="https://www.zomato.com/live/city/mumbai/events"
            className="rounded-lg overflow-hidden shadow-md"
            target="_blank"
          >
            <img
              src="/liveEvents.jpg"
              alt="Live Events"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Live Events</h3>
              <p className="text-gray-600">
                Discover India's best events & concerts
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Collections */}
      <section className="container mx-auto py-12 px-4 w-[80vw]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Collections</h2>
            <p className="text-gray-600">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Mumbai, based on trends
            </p>
          </div>
          <a href="#" className="flex items-center">
            All collections in Mumbai
            <span className="ml-1">▶</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group"
            >
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                className="w-full h-72 object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold text-lg mb-1">
                  {collection.title}
                </h3>
                <p className="flex items-center">
                  {collection.places}
                  <span className="ml-1">▶</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Localities */}
      <section className="container mx-auto py-12 px-4 w-[80vw]">
        <h2 className="text-3xl font-bold mb-8">
          Popular localities in and around Mumbai
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localities.map((locality, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div>
                <h3 className="font-semibold text-lg">{locality.name}</h3>
                <p className="text-gray-600">{locality.places}</p>
              </div>
              <span className="text-gray-400">▶</span>
            </div>
          ))}
          <div className="flex items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <span className="text-gray-600">see more</span>
            <span className="ml-2">▼</span>
          </div>
        </div>
      </section>

      {/* Get the App */}
      <section className="container mx-auto py-12 px-4 w-[80vw]">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="/phone.png"
              alt="Zomato App"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="flex-1 max-w-md">
            <h2 className="text-4xl font-bold mb-4">Get the Zomato app</h2>
            <p className="text-gray-600 mb-8">
              We will send you a link, open it on your phone to download the app
            </p>
            <div className="space-y-6">
              <div className="flex gap-8">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="contact"
                    value="email"
                    defaultChecked
                  />
                  <span>Email</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="contact" value="phone" />
                  <span>Phone</span>
                </label>
              </div>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-grow p-2 border rounded"
                />
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                  Share App Link
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">Download app from</p>
                <div className="flex gap-4">
                  <img
                    src="/googleplay.png"
                    alt="Play Store"
                    className="cursor-pointer w-[120px] h-[40px]"
                  />
                  <img
                    src="/appstore.png"
                    alt="App Store"
                    className="cursor-pointer w-[120px] h-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12 px-4 w-[80vw]">
        <h2 className="text-3xl font-bold mb-8">Explore options near me</h2>
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="border rounded-lg">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50"
              >
                <span className="text-lg">{section.title}</span>
                <span
                  className="transform transition-transform duration-200"
                  style={{
                    transform:
                      openSection === section.id
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </button>
              {openSection === section.id && (
                <div className="p-4 border-t bg-white">
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {section.content.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-red-500"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 w-[80vw]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">ABOUT ZOMATO</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Work With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Report Fraud
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">ZOMAVERSE</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Zomato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Blinkit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    District
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Feeding India
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Hyperpure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Zomato Live
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Zomaland
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Weather Union
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">FOR RESTAURANTS</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Apps For You
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">LEARN MORE</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="font-bold mb-4">SOCIAL LINKS</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">LinkedIn</span>
                    <img
                      src="/linkedin.png"
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">Instagram</span>
                    <img
                      src="/instaicon.png"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">Twitter</span>
                    <img src="/twitter.png" alt="Twitter" className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">YouTube</span>
                    <img src="/yt.png" alt="YouTube" className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">Facebook</span>
                    <img src="/fb.png" alt="Facebook" className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <a href="#" className="block">
                  <img
                    src="/appstore.png"
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="/googleplay.png"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
