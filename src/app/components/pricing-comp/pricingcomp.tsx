import React, { useState } from 'react';
import {  MapPin, Minus, Plus } from 'lucide-react';

interface ServiceItemProps {
    title: string;
    subtitle?: string;
    price: number;
    currency?: string;
    isExpanded?: boolean;
    onToggleExpand?: () => void;
    onQuantityChange?: (quantity: number) => void;
    onPlaceOrder?: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
    title,
    subtitle,
    price,
    currency = '$',
    isExpanded = false,
    onToggleExpand,
    onQuantityChange,
    onPlaceOrder
}) => {
    const [quantity, setQuantity] = useState(1);
    // const [selectedLocation, setSelectedLocation] = useState('');
    const [collectionSlot, setCollectionSlot] = useState('');
    const [dropoffSlot, setDropoffSlot] = useState('');

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
            onQuantityChange?.(newQuantity);
        }
    };

    const handlePlaceOrder = () => {
        onPlaceOrder?.();
    };

    const handleToggle = () => {
        onToggleExpand?.();
    };

    return (
        <div className={`rounded-lg overflow-hidden ${isExpanded ? 'bg-gradient-to-b from-[#C6AE64] to-[#9C7238]' : 'bg-[#141414]'} text-white transition-all duration-300 ${isExpanded ? 'row-span-3' : ''}`}>
            {/* Main Item Row */}
            <div
                className="flex justify-between items-center px-4 py-4 cursor-pointer   transition-colors"
                onClick={handleToggle}
            >
                <div className="flex gap-1 ">
                    <span className={`text-md font-[200] ${isExpanded ? 'text-black font-[400]' : 'text-white'}`}>{title} - </span>
                    {subtitle && (
                        <span className={`text-md font-[200] ${isExpanded ? 'text-black font-[400]' : 'text-white'}`}>
                            {subtitle}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    <span className={`text-md font-[200] ${isExpanded ? 'text-black font-[400]' : 'text-white'}`}>
                        {currency}{price.toFixed(2)}
                    </span>

                    {/* Quantity Controls - only show when expanded */}
                    {isExpanded && (
                        <div className="flex items-center bg-white rounded-full">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleQuantityChange(quantity - 1);
                                }}
                                className="w-6 h-6 rounded-full bg-[#141414] flex items-center justify-center transition-colors"
                            >
                                <Minus color='#C6AE64' size={12} />
                            </button>
                            <span className="w-8 text-center bg-white text-black text-sm font-medium">{quantity}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleQuantityChange(quantity + 1);
                                }}
                                className="w-6 h-6 rounded-full bg-[#141414] flex items-center justify-center transition-colors"
                            >
                                <Plus color='#C6AE64' size={12} />
                            </button>
                        </div>
                    )}

                  
                </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="px-4 pb-3 space-y-4  ">
                    {/* Select Location */}
                    <button className="w-full flex items-center gap-2 bg-[#141414] text-white px-3 py-2 rounded-lg text-sm transition-colors">
                        <MapPin size={14} />
                        <span>Select Location</span>
                    </button>

                    {/* Collection and Dropoff Slots */}
                    <div className="grid grid-cols-2 gap-4">
                        <select
                            value={collectionSlot}
                            onChange={(e) => setCollectionSlot(e.target.value)}
                            className="w-full bg-[#141414] text-white px-3 py-2 rounded-lg text-sm border-none outline-none appearance-none cursor-pointer transition-colors"
                        >
                            <option value="">Collection Slot</option>
                            <option value="morning">Morning (9-12)</option>
                            <option value="afternoon">Afternoon (1-5)</option>
                            <option value="evening">Evening (6-9)</option>
                        </select>

                        <select
                            value={dropoffSlot}
                            onChange={(e) => setDropoffSlot(e.target.value)}
                            className="w-full bg-[#141414] text-white px-3 py-2 rounded-lg text-sm border-none outline-none appearance-none cursor-pointer transition-colors"
                        >
                            <option value="">Dropoff Slot</option>
                            <option value="morning">Morning (9-12)</option>
                            <option value="afternoon">Afternoon (1-5)</option>
                            <option value="evening">Evening (6-9)</option>
                        </select>
                    </div>

                    {/* Place Order Button */}
                    <button
                        onClick={handlePlaceOrder}
                        className="w-full bg-[#000000] text-[#C6AE64] px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        Place Order
                    </button>
                </div>
            )}
        </div>
    );
};

export default ServiceItem;