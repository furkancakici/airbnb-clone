import { useRouter } from 'next/router';
import { format } from 'date-fns';

const Search = ({ searchResult }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;
  const formattedStartDate = format(!!startDate ? new Date(startDate) : Date.now(), 'dd MMMM yy');
  const formattedEndDate = format(!!endDate ? new Date(endDate) : Date.now(), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <main className="flex max-w-7xl mx-auto px-8 sm:px-16 my-6">
      <section>
        <p className="text-xs">
          300+ Stays - {!!range ? range : ''} - for {!!noOfGuest ? noOfGuest : ''} number of guests
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {!!location ? location : ''}</h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>
      </section>
    </main>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch('https://www.jsonkeeper.com/b/5NPS').then((res) => res.json());

  return {
    props: {
      searchResult
    }
  };
}
