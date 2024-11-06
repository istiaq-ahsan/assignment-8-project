import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {

    const devices = useLoaderData()

    const { category } = useParams()

    const [gadget, setGadget] = useState([])

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...devices].filter(gadget => gadget.category === category)
            setGadget(filteredByCategory)
        }
        else {
            setGadget(devices)
        }
    }, [category, devices])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-3">
            {
                gadget.map(device => <Card key={device.product_id} device={device}></Card>)
            }
        </div>
    )
};

export default GadgetCards;