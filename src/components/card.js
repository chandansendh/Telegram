import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({light}) => {
    const [data , setData] = useState([]);
    const [uniqueCreatorArray, setUniqueCreatorArray] = useState([]);
    const navigate = useNavigate();

  const getData = async () => {
    try {
      let allData = [];
      for (let a = 1; a <= 10; a++) {
        const response = await fetch(
          `https://devapi.beyondchats.com/api/get_all_chats?page=${a}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        const userData = jsonData.data.data;
        allData = [...allData, ...userData];
        console.log(jsonData);
      }
      setData(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const uniqueCreators = data.reduce((acc, obj) => {
      const name = obj.creator.name;
      if (!acc[name]) {
        acc[name] = obj;
      }
      return acc;
    }, {});
    setUniqueCreatorArray(Object.values(uniqueCreators));
  }, [data]);

  console.log(data);
  console.log(uniqueCreatorArray);

  function getInitials(name) {
    const parts = name.split(" ");
    let initials = "";
    parts.forEach((part) => {
      if (part) {
        initials += part[0].toUpperCase();
      }
    });

    return initials;
  }

  return (
    <>
      <div className="card">
        {uniqueCreatorArray.map((val, ind) => {
            if (ind === 0 || !val.creator.name) {
              return;
            }
            return (
              <div
                className={`card-body ${light ? "light-card-body" : ""}`}
                key={ind}
                onClick={() => navigate(`/chat/${val.id}/${val.creator.name}/${light}`)}
              >
                <div className="logo">
                  {val.creator.name ? getInitials(val.creator.name) : "NA"}
                </div>
                <div className="cont">
                  <div className={`user-name ${light ? "light-user-name" : ""}`}>
                    {val.creator.name ? val.creator.name : "NA"}
                  </div>
                  <div className="msg">
                    Is there anything else I can assist?
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </>
  );
}

export default Card;