import Heading from "../StaticPages/heading";

const Faq = () => {
    return (
        <div>
            <div className="bg-blue-600 h-[200px]">
                <Heading title={"FAQ !"}
                    description={"Find answers to common questions about Gadget Heaven's products, policies, and more. We're here to help!"}
                ></Heading>
            </div>
            <div className="w-4/5 mx-auto my-10 space-y-3">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What types of gadgets are available at Gadget Heaven?</div>
                    <div className="collapse-content">
                        <p>We offer a wide range of gadgets, including smartphones, laptops, smartwatches, accessories, and more. All our products are handpicked to ensure quality and performance.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I track my order?</div>
                    <div className="collapse-content">
                        <p>Once your order has been shipped, you'll receive a tracking number via email or SMS. You can use this tracking number on our shipping partner’s website to track your order in real time.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Can I return a product if I am not satisfied?</div>
                    <div className="collapse-content">
                        <p>Yes, we provide manufacturer warranties on most of our products. The warranty period and conditions vary by product, so please check the individual product page for more details.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Are there any warranties on the products?</div>
                    <div className="collapse-content">
                        <p>Yes, we provide manufacturer warranties on most of our products. The warranty period and conditions vary by product, so please check the individual product page for more details.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;