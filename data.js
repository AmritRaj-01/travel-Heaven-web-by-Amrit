const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Majestic Taj Mahal Stay",
      description: "Experience the grandeur of the Taj Mahal with a luxurious stay near this wonder of the world.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1575465468601-6ee3361b4c27?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Agra, Uttar Pradesh",
      country: "India",
    },
    {
      title: "Serene Houseboat in Kerala",
      description: "Stay in a floating houseboat on Kerala’s backwaters and witness nature at its best.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1576153192773-f9be53343c1a?ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2VyYWxhJTIwaG91c2Vib2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3200,
      location: "Alleppey, Kerala",
      country: "India",
    },
    {
      title: "Luxury Beachfront Villa in Goa",
      description: "Enjoy the tropical paradise of Goa with a beach-facing villa, private pool, and stunning views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1601924582970-03f8efc39845?ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2hmcmludCUyMHZpbGxhJTIwaW4lMjBnb2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Goa",
      country: "India",
    },
    {
      title: "Mountain Cabin Retreat in Manali",
      description: "A cozy wooden cabin in the hills of Manali, perfect for a peaceful getaway.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1614410175069-2f4534fa7a5a?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWxpJTIwY2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2700,
      location: "Manali, Himachal Pradesh",
      country: "India",
    },
    {
      title: "Floating Hotel in Dal Lake",
      description: "Stay in a traditional Kashmiri houseboat on Dal Lake with mesmerizing views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586789168132-028aa5b37a36?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFsJTIwbGFrZSUyMGhvdXNlYm9hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Srinagar, Jammu & Kashmir",
      country: "India",
    },
    {
      title: "Jungle Lodge in Jim Corbett",
      description: "Stay close to wildlife in a jungle lodge near India's oldest national park.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1624209031690-bad23020c9b0?ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amltJTIwY29yYmV0dCUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Nainital, Uttarakhand",
      country: "India",
    },
    {
      title: "Royal Haveli Stay in Jaisalmer",
      description: "Live like a king in a heritage haveli in the Golden City of Jaisalmer.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587082636132-0191e22d374f?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFpc2FsbWVyJTIwaGF2ZWxpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2800,
      location: "Jaisalmer, Rajasthan",
      country: "India",
    },
    {
      title: "Tea Estate Bungalow in Munnar",
      description: "Enjoy a scenic stay in a tea estate bungalow overlooking lush plantations.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1561056474-3b62dcf30272?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVuYXIlMjB0ZWElMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2600,
      location: "Munnar, Kerala",
      country: "India",
    },
    {
      title: "Lake View Cottage in Udaipur",
      description: "A stunning lakefront cottage with breathtaking views of Lake Pichola.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1563772555424-bc7e64a28efc?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRhaXB1ciUyMGxha2UlMjB2aWV3JTIwY290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3200,
      location: "Udaipur, Rajasthan",
      country: "India",
    },
    {
      title: "Heritage Stay in Varanasi",
      description: "Stay in a historic guesthouse overlooking the sacred Ganges River.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1592229506156-b0c55a5f56d7?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFyYW5hc2klMjBnaGF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1900,
      location: "Varanasi, Uttar Pradesh",
      country: "India",
    },
    {
      title: "Beachfront Cottage in Goa",
      description: "A stunning beachfront cottage with breathtaking ocean views and private beach access.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1601924582970-03f8efc39845?auto=format&fit=crop&w=800&q=60",
      },
      price: 4500,
      location: "Goa",
      country: "India",
    },
    {
      title: "Himalayan Riverside Camp in Rishikesh",
      description: "Experience adventure and tranquility with this riverside camp along the Ganges in Rishikesh.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1549194387-f3b0f5e00fb2?auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Rishikesh, Uttarakhand",
      country: "India",
    },
    {
      title: "Luxury Hilltop Resort in Manali",
      description: "A premium hilltop resort offering breathtaking views of the Himalayas and lush valleys.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1614410175069-2f4534fa7a5a?auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Manali, Himachal Pradesh",
      country: "India",
    },
    {
      title: "Colonial Bungalow Stay in Shimla",
      description: "A heritage colonial-style bungalow with mesmerizing mountain views in Shimla.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587082636132-0191e22d374f?auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Shimla, Himachal Pradesh",
      country: "India",
    },
    {
      title: "Floating Houseboat in Dal Lake",
      description: "Stay on a luxurious traditional houseboat in the pristine waters of Dal Lake.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586789168132-028aa5b37a36?auto=format&fit=crop&w=800&q=60",
      },
      price: 3200,
      location: "Srinagar, Jammu & Kashmir",
      country: "India",
    },
    {
      title: "Jungle Lodge in Jim Corbett",
      description: "A perfect getaway for wildlife enthusiasts, set in the heart of Jim Corbett National Park.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1624209031690-bad23020c9b0?auto=format&fit=crop&w=800&q=60",
      },
      price: 2800,
      location: "Nainital, Uttarakhand",
      country: "India",
    },
    {
      title: "Tea Estate Bungalow in Darjeeling",
      description: "Stay amidst lush tea gardens in a colonial-era bungalow with spectacular sunrise views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1561056474-3b62dcf30272?auto=format&fit=crop&w=800&q=60",
      },
      price: 2600,
      location: "Darjeeling, West Bengal",
      country: "India",
    },
    {
      title: "Desert Camp in Jaisalmer",
      description: "Experience desert life with camel rides and cultural performances under the stars.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587082636132-0191e22d374f?auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Jaisalmer, Rajasthan",
      country: "India",
    },
    {
      title: "Lake View Cottage in Udaipur",
      description: "A cozy lake-facing cottage in Udaipur, offering mesmerizing views of Lake Pichola.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1563772555424-bc7e64a28efc?auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Udaipur, Rajasthan",
      country: "India",
    },
    {
      title: "Cultural Homestay in Varanasi",
      description: "A peaceful homestay overlooking the Ganges, ideal for experiencing the spiritual side of India.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1592229506156-b0c55a5f56d7?auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Varanasi, Uttar Pradesh",
      country: "India",
    },
    {
      title: "Seaside Resort in Andaman",
      description: "A serene beachside retreat on Havelock Island with crystal-clear waters and white sand beaches.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
      },
      price: 6000,
      location: "Havelock Island, Andaman & Nicobar",
      country: "India",
    },
    {
      title: "Himalayan Retreat in Spiti Valley",
      description: "A remote Himalayan retreat surrounded by snow-capped peaks and serene monasteries.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1553434230-5347e5b01bfa?auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Spiti Valley, Himachal Pradesh",
      country: "India",
    },
    {
      title: "Jungle Treehouse in Wayanad",
      description: "Stay in a stunning treehouse overlooking dense forests and wildlife in Wayanad.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587397845856-7915a1be06f4?auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Wayanad, Kerala",
      country: "India",
    },
    {
      title: "Traditional Bamboo Hut in Meghalaya",
      description: "Stay in a bamboo hut and explore the living root bridges and waterfalls of Meghalaya.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1592564635399-523eea16b248?auto=format&fit=crop&w=800&q=60",
      },
      price: 2800,
      location: "Cherrapunji, Meghalaya",
      country: "India",
    },
    {
      title: "Heritage Haveli Stay in Jaipur",
      description: "Stay in a centuries-old haveli and experience the royal lifestyle of Rajasthan.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
      },
      price: 3200,
      location: "Jaipur, Rajasthan",
      country: "India",
    },
    {
      title: "Coastal Homestay in Pondicherry",
      description: "A charming French-style homestay near the scenic beaches of Pondicherry.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1572616446956-03d7b7e8e38e?auto=format&fit=crop&w=800&q=60",
      },
      price: 2700,
      location: "Pondicherry",
      country: "India",
    },
  ];
  
  module.exports = { data: sampleListings };