import axios from 'axios';

class Api {
          //Api function to return a list of all entries
          static async getAllSeries(){
                     const results = await axios.get('./sample.json')
                    const all = results.data.entries;
                    const series = all.filter(show=>(show.programType === "series"))
                    const ordered = series.sort((a,b) => a.title > b.title ? 1 : -1);
                    return ordered;
          }
          static async getAllMovies() {
                    const results = await axios.get('./sample.json')
                    const all = results.data.entries;
                    const  movies = all.filter(movie=>(movie.programType==="movie"))
                    const ordered = movies.sort((a,b) => a.title > b.title ? 1 : -1);
                    return ordered;
          }        
          static async login(info){
//this where we would call an api to see if we are a user and that we are putting the right credential in
                    const result ="you Logged in"
                    return result;
          }  
}
export default Api;