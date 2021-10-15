import { useState } from 'react';
import Api from '../api';

const useData = (type) => {
          const [data,loadData] = useState()
          const [isLoading,changeLoading] = useState(true)

          if(type === "series"){
                    const getData =async() => {
                              const data = await Api.getAllSeries();
                              
                              loadData(() => data);
                              changeLoading(false);
                              }
                     return [data, getData, isLoading];            
          }else{
                    const getData = async() => {
                              const data = await Api.getAllMovies();
                              console.log(data);
                              loadData(() => data);
                              changeLoading(false);
                    }
                    return [data, getData, isLoading];
          }
          
}

export {useData};