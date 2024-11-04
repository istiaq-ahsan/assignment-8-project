import { NavLink } from 'react-router-dom';

const AllGadget = ({ categories }) => {

    return (
        <div role="tablist" className="flex flex-col w-1/5 tabs-lifted">
            <NavLink to="/" role="tab" className="tab tab-active"><h1>All Product</h1></NavLink>

            {
                categories.map(category => (
                    <NavLink key={category.id} to={`/category/${category.category}`} role="tab" className="tab tab-active"><h1>{category.category}</h1></NavLink>
                ))
            }

        </div>
    );
};

export default AllGadget;