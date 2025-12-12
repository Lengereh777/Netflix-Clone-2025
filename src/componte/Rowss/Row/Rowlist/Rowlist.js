import React from "react";
import Row from "../Row";
import Requests from "../../../../pages/Home/utilss/requests";




export default function RowList() {
  return (
    <div className="rowlist">
      <Row
        title="Netflix Originals"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}
