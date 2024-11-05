import { NavLink } from 'react-router-dom';

const AllGadget = ({ categories }) => {

    return (
        <div role="tablist" className="flex flex-col rounded-2xl p-5 w-auto tabs-lifted gap-3 border h-[450px] border-gray-200">
            <NavLink to="/" role="button" className="btn rounded-full"><h1>All Product</h1></NavLink>

            {
                categories.map(category => (
                    <NavLink key={category.id} to={`/category/${category.category}`}
                        role="button" className="btn rounded-full"><h1>{category.category}</h1></NavLink>
                ))
            }

        </div>
    );
};

export default AllGadget;

