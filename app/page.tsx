import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturers:searchParams?.manufacturers || "",
    year:searchParams?.year || 2022,
    fuel:searchParams?.fuel || "",
    limit:searchParams?.limit || 10,
    model:searchParams?.model || "",
  })
  console.log(allCars)
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-w " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold "> Car Catalogue </h1>
          <p>Explore The Cars You Like.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ?
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((d)=>(
                <CarCard car={d} />
              ))}
            </div>
            <ShowMore  
              pageNumber={(searchParams?.limit || 10)/10}
              isNext={(searchParams.limit || 10)>allCars?.length}
            />
          </section> :
          <section className="home__error-container" >
            <h2 className="text-black tex-xl font-bold" > We Dont</h2>
            <p>{allCars?.message}</p>
          </section>}
      </div>
    </main>
  );
}
