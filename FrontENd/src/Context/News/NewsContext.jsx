// import { createContext, useReducer } from "react";
// import NewsReducer from "./NewsReducer";

// const NewsContext = createContext()

// export const NewsProvider = ({children}) =>{

//   const initalState = {
//     allNews : [
//       {
       
//         "author": "benzinga.com",
//         "title": "Mark Cuban Takes A Dig At Elon Musk On Equal Pay: Would You Adjust Salaries For 'Historically' Under Paid Demographic At Tesla And Other Companies?",
//         "description": "Shark Tank host Mark Cuban is taking on Tesla Inc. CEO Elon Musk once again. This time, it's over concerns about the wage gap between demographics. What Happened: Cuban asked Musk if he is willing to increase the wages of historically underpaid demographics a…",
//         "url": "https://biztoc.com/x/38a632c283ca8423",
//         "urlToImage": "https://c.biztoc.com/p/38a632c283ca8423/s.webp",
//         "publishedAt": "2024-02-24T07:46:11Z",
//         "content": "Shark Tank host Mark Cuban is taking on Tesla Inc. CEO Elon Musk once again. This time, it's over concerns about the wage gap between demographics.What Happened: Cuban asked Musk if he is willing to … [+292 chars]"
//         }
//     ]
//   }

//   const [state, dispatch] = useReducer(NewsReducer, initalState)
//   return <NewsContext.Provider value={{...state, dispatch}}>
//     {children}
//   </NewsContext.Provider>
// }

// export default NewsContext;