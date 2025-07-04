"use client"
import React, { useState, useEffect } from 'react';

// Define the type for service items
interface ServiceItem {
    id: number;
    name: string;
    basePrice: number;
    initialQuantity: number;
}

// Define the dry cleaning service items with their base prices and initial quantities
const serviceItems: ServiceItem[] = [
    { id: 1, name: "Blouse - Dry Clean", basePrice: 6.00, initialQuantity: 2 },
    { id: 2, name: "Dinner Suit - Dry Clean", basePrice: 9.00, initialQuantity: 1 },
    { id: 3, name: "Dress - Dry Clean", basePrice: 10.00, initialQuantity: 1 },
    { id: 4, name: "Handbag - Dry Clean", basePrice: 8.00, initialQuantity: 1 },
    { id: 5, name: "Jeans - Dry Clean", basePrice: 8.00, initialQuantity: 1 },
    { id: 6, name: "Coat - Dry Clean", basePrice: 6.00, initialQuantity: 1 },
    { id: 7, name: "Jacket - Dry Clean", basePrice: 6.00, initialQuantity: 1 },
    { id: 8, name: "Jumper - Dry Clean", basePrice: 6.00, initialQuantity: 1 },
];

// Main App component
const App = () => {
    // State to manage the currently selected item for the detailed card
    const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);
    // State for the quantity of the selected item
    const [quantity, setQuantity] = useState(1);
    // State for location input
    const [location, setLocation] = useState("");
    // State for collection slot
    const [collectionSlot, setCollectionSlot] = useState("");
    // State for dropoff slot
    const [dropoffSlot, setDropoffSlot] = useState("");
    // State to control modal visibility
    const [showModal, setShowModal] = useState(false);
    // State for the modal message
    const [modalMessage, setModalMessage] = useState("");

    // Effect to reset quantity when a new item is selected
    useEffect(() => {
        if (selectedItem) {
            setQuantity(selectedItem.initialQuantity || 1);
        }
    }, [selectedItem]);

    // Function to handle clicking on a service item from the list
    const handleItemClick = (item: ServiceItem) => {
        if (selectedItem && selectedItem.id === item.id) {
            // If clicking the same item, close it
            setSelectedItem(null);
        } else {
            // Open new item
            setSelectedItem(item);
            // Reset form fields when opening a new item
            setLocation("");
            setCollectionSlot("");
            setDropoffSlot("");
        }
    };

    // Function to increase the quantity
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Function to decrease the quantity, not allowing it to go below 1
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    // Function to handle placing the order
    const handlePlaceOrder = () => {
        if (!selectedItem) {
            setModalMessage("No item selected.");
            setShowModal(true);
            return;
        }
        
        if (!location || !collectionSlot || !dropoffSlot) {
            setModalMessage("Please fill in all fields (Location, Collection Slot, Dropoff Slot).");
            setShowModal(true);
            return;
        }
        // Simulate order placement
        setModalMessage(`Order placed for ${quantity} x ${selectedItem.name} at ${(selectedItem.basePrice * quantity).toFixed(2)}.
        \nLocation: ${location}
        \nCollection: ${collectionSlot}
        \nDropoff: ${dropoffSlot}`);
        setShowModal(true);
        console.log("Order Details:", {
            item: selectedItem.name,
            quantity,
            totalPrice: (selectedItem.basePrice * quantity).toFixed(2),
            location,
            collectionSlot,
            dropoffSlot
        });
    };

    // Simple Modal Component
    const Modal = ({ message, onClose }) => {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                <div className="bg-amber-50 p-6 rounded-xl shadow-lg border-2 border-amber-600 max-w-sm w-full mx-auto text-center">
                    <p className="text-gray-800 text-lg mb-4 whitespace-pre-line">{message}</p>
                    <button
                        onClick={onClose}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md"
                    >
                        OK
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black text-gray-800 font-sans flex flex-col items-center p-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-8 mt-6">Dry Cleaning Prices</h1>
            <p className="text-center text-gray-600 max-w-xl mb-10 text-base sm:text-lg">
                Professional dry cleaning for all kinds of garments, and more with a 24 hour turnaround.
            </p>

            {/* Main content area */}
            <div className="w-full max-w-2xl space-y-2">
                {/* List of service items */}
                {serviceItems.map(item => (
                    <div key={item.id} className="w-full">
                        {/* Service Item Card */}
                        <div
                            className={`bg-amber-100 border-2 border-amber-600 p-4 rounded-xl shadow-md cursor-pointer
                                       hover:bg-amber-200 transition-all duration-300 flex justify-between items-center
                                       ${selectedItem && selectedItem.id === item.id ? 'bg-amber-200 shadow-lg' : ''}`}
                            onClick={() => handleItemClick(item)}
                        >
                            <span className="text-gray-800 text-lg sm:text-xl font-medium">{item.name}</span>
                            <div className="flex items-center space-x-3">
                                <span className="text-amber-800 text-lg sm:text-xl font-bold">${item.basePrice.toFixed(2)}</span>
                                <div className={`w-6 h-6 rounded-full border-2 border-amber-800 flex items-center justify-center transition-all duration-300 ${
                                    selectedItem && selectedItem.id === item.id ? 'bg-amber-800' : 'bg-white'
                                }`}>
                                    {selectedItem && selectedItem.id === item.id && (
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Expandable Order Form */}
                        {selectedItem && selectedItem.id === item.id && (
                            <div className="bg-amber-50 border-2 border-amber-600 border-t-0 rounded-b-xl p-6 shadow-lg animate-in slide-in-from-top duration-300">
                                {/* Price and Quantity */}
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-3xl font-bold text-amber-800">${(item.basePrice * quantity).toFixed(2)}</span>
                                    <div className="flex items-center space-x-3 bg-white rounded-lg p-2 border border-amber-300">
                                        <button
                                            onClick={decreaseQuantity}
                                            className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold hover:bg-amber-700 transition-colors duration-200"
                                        >
                                            -
                                        </button>
                                        <span className="text-gray-800 text-xl font-semibold w-8 text-center">{quantity}</span>
                                        <button
                                            onClick={increaseQuantity}
                                            className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold hover:bg-amber-700 transition-colors duration-200"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Select Location */}
                                <div className="relative mb-4">
                                    <input
                                        type="text"
                                        placeholder="Select Location"
                                        className="w-full p-4 pl-12 bg-white text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 border border-amber-300 focus:border-amber-600"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>

                                {/* Collection and Dropoff Slots */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="relative">
                                        <select
                                            className="w-full p-4 pr-10 bg-white text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 border border-amber-300 focus:border-amber-600 appearance-none"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23D97706'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 0.75rem center',
                                                backgroundSize: '1.25rem'
                                            }}
                                            value={collectionSlot}
                                            onChange={(e) => setCollectionSlot(e.target.value)}
                                        >
                                            <option value="" disabled>Collection Slot</option>
                                            <option value="Today - 10 AM">Today - 10 AM</option>
                                            <option value="Today - 2 PM">Today - 2 PM</option>
                                            <option value="Tomorrow - 10 AM">Tomorrow - 10 AM</option>
                                        </select>
                                    </div>
                                    <div className="relative">
                                        <select
                                            className="w-full p-4 pr-10 bg-white text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 border border-amber-300 focus:border-amber-600 appearance-none"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23D97706'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 0.75rem center',
                                                backgroundSize: '1.25rem'
                                            }}
                                            value={dropoffSlot}
                                            onChange={(e) => setDropoffSlot(e.target.value)}
                                        >
                                            <option value="" disabled>Dropoff Slot</option>
                                            <option value="Tomorrow - 2 PM">Tomorrow - 2 PM</option>
                                            <option value="Day after - 10 AM">Day after - 10 AM</option>
                                            <option value="Day after - 2 PM">Day after - 2 PM</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Place Order Button */}
                                <button
                                    onClick={handlePlaceOrder}
                                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg text-lg"
                                >
                                    Place Order
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default App;