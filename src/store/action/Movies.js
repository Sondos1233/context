import axiosInstance from './../../Component/axios/axisConfig'

export default function changeMovie(){


    return (dispatch)=>{

        axiosInstance
        .get("movie/popular?",{
            params: {
                api_key: `b95d71488f9c45a469d42381ddaa5375`,
            }
            
        })
        .then((res) =>dispatch({type:"SET_Movies",payload:res.data.results}))
        .catch((err) => console.log(err));



    }
}