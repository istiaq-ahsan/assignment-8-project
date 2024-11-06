import Heading from "../StaticPages/heading";
import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {

    const data = [
        { product_id: 101, product_title: "Dell XPS 13", price: 999, rating: 4.8 },
        { product_id: 102, product_title: "HP Spectre x360", price: 1150, rating: 4.7 },
        { product_id: 103, product_title: "Samsung Galaxy S21", price: 799, rating: 4.5 },
        { product_id: 104, product_title: "OnePlus 9", price: 729, rating: 4.4 },
        { product_id: 105, product_title: "Ray-Ban Wayfarer", price: 150, rating: 4.6 },
        { product_id: 106, product_title: "Fossil Leather Wallet", price: 70, rating: 4.2 },
        { product_id: 107, product_title: "Apple Watch Series 7", price: 399, rating: 4.9 },
        { product_id: 108, product_title: "Samsung Galaxy Watch 4", price: 249, rating: 4.3 },
        { product_id: 109, product_title: "MacBook Pro 14-inch", price: 1999, rating: 4.7 },
        { product_id: 110, product_title: "MacBook Air M1", price: 999, rating: 4.8 },
        { product_id: 111, product_title: "iPhone 13", price: 799, rating: 4.6 },
        { product_id: 112, product_title: "iPhone SE (2022)", price: 429, rating: 4.4 }
    ];




    return (
        <div>
            <div className="bg-blue-600 h-[200px]">
                <Heading title={"Statistics"}
                    description={"Explore the latest gadgets that will take your experience next level.From smart devices to the coolest accessories,we have it all!"}
                ></Heading>
            </div>
            <div className="mt-10 w-[90%] mx-auto">
                <h1 className="text-4xl font-bold">Statistics</h1>
            </div>
            <div className="p-8">
                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" />
                        <YAxis />
                        <Tooltip
                            content={({ payload }) => {
                                if (payload && payload.length) {
                                    const { product_title, price, rating } = payload[0].payload;
                                    return (
                                        <div className="custom-tooltip">
                                            <p><strong>Product:</strong> {product_title}</p>
                                            <p><strong>Price:</strong> ${price}</p>
                                            <p><strong>Rating:</strong> {rating}</p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Legend />
                        <Area type="monotone" dataKey="price" fill="#93C5FD" stroke="#8884d8" />
                        <Bar dataKey="price" barSize={20} fill="#2563EB" />
                        <Line type="monotone" dataKey="Rating" stroke="#8884d8" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistics;