import { getAllListing } from "@/services/ListingService";

const AllProductPage = async () => {
    
    const listings = await getAllListing()
    console.log(listings);
    return (
        <div>
            All Product Page
        </div>
    );
};

export default AllProductPage;