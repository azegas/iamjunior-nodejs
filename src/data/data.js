const categories = [
    { 
        id: 1, 
        name: "electronics", 
        color: "blue", 
        url: "https://example.com/electronics"
    },
    { 
        id: 2, 
        name: "fashion", 
        color: "pink", 
        url: "https://example.com/fashion"
    },
    { 
        id: 3, 
        name: "home", 
        color: "green", 
        url: "https://example.com/home-garden"
    },
    { 
        id: 4, 
        name: "sports", 
        color: "orange", 
        url: "https://example.com/sports-outdoors"
    },
    { 
        id: 5, 
        name: "toys", 
        color: "yellow", 
        url: "https://example.com/toys-games"
    }
];

const businesses = [
    { 
        id: 1, 
            name: "TechCorp", 
            description: "Leading electronics manufacturer", 
            address: "123 Tech St, Silicon Valley", 
            category: "electronics", 
            contactPerson: "John Doe", 
            email: "john.doe@techcorp.com", 
            images: ["https://example.com/techcorp-logo.png"]
        },
        { 
            id: 2, 
            name: "Fashionista", 
            description: "Trendy fashion retailer", 
            address: "456 Fashion Ave, New York", 
            category: "fashion", 
            contactPerson: "Jane Smith", 
            email: "jane.smith@fashionista.com", 
            images: ["https://example.com/fashionista-logo.png"]
        },
        { 
            id: 3, 
            name: "GreenThumb", 
            description: "Home and garden supplies", 
            address: "789 Garden St, Los Angeles", 
            category: "home", 
            contactPerson: "Michael Brown", 
            email: "michael.brown@greenthumb.com", 
            images: ["https://example.com/greenthumb-logo.png"]
        },
        { 
            id: 4, 
            name: "OutdoorAdventures", 
            description: "Sports and outdoor gear", 
            address: "1010 Outdoor Dr, Denver", 
            category: "sports", 
            contactPerson: "Emily Johnson", 
            email: "emily.johnson@outdooradventures.com", 
            images: ["https://example.com/outdooradventures-logo.png"]
        },
        { 
            id: 5, 
            name: "Toyland", 
            description: "Toys and games for all ages", 
            address: "1212 Toy St, Chicago", 
            category: "toys", 
            contactPerson: "Sarah Lee", 
            email: "sarah.lee@toyland.com", 
        images: ["https://example.com/toyland-logo.png"]
        },
        { 
            id: 6, 
            name: "Fashionista", 
            description: "Trendy fashion retailer", 
            address: "456 Fashion Ave, New York", 
            category: "fashion", 
            contactPerson: "Jane Smith", 
            email: "jane.smith@fashionista.com", 
            images: ["https://example.com/fashionista-logo.png"]
        },
];

const orders = [
    {
        id: 1,
        businessId: 1,
        date: "2023-10-01",
        time: "14:30",
        userEmail: "user1@example.com",
        userName: "User One",
        status: "Pending"
    },
    {
        id: 2,
        businessId: 2,
        date: "2023-10-02",
        time: "15:00",
        userEmail: "user2@example.com",
        userName: "User Two",
        status: "Completed"
    },
];


module.exports = {
    categories,
    businesses,
    orders
}