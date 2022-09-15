import React from 'react';
import './App.css';
import ReactPaginate from 'react-paginate';
import JsonData from './MOCK_DATA.json';
// import JsonData from './data.json';
import { useState, useEffect } from 'react';
// import axios from "axios";



function App() {
  // const [uusers,ssetUsers]=useState([])
  
  // const re = useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon?query=html").then((res)=>ssetUsers(res.data)).catch((err)=>err)
  // }, [])
  // console.log(uusers);


  const [users, setUsers] = useState(JsonData.slice(0,50));  // total users 100 in this website
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
    return (
      <div className='user'>
        <h3>First Name : {user.first_name}</h3>
        <h3>Last Name : {user.last_name}</h3>
        <h3>Email : {user.email}</h3>
        
      </div>
    )
  });

  const pageCount=Math.ceil(users.length/usersPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
