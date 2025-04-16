// src/App.js

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { app} from "./FirbaseConfig";
import { set, ref, getDatabase } from "firebase/database";

const db = getDatabase(app)
function Firbase() {
//   const [data, setData] = useState([]);

  const putdata = () => {
    set(ref(db, "Kinjal/users"), {
        id: 1,
        name: "kinjal",
        age: 22,
    })
  }

//   useEffect(() => {
//     const fetchData = async () => {
//       const querySnapshot = await getDocs(collection(db, "your_collection_name"));
//       const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setData(docs);
//     };

//     fetchData();
//   }, []);

  return (
    <div>
      <h1>Firebase + React</h1>
      <button onClick={putdata}>putData</button>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Firbase;
