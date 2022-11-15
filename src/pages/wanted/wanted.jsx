import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWantedPerson } from "../../requests/wantedRequest"


const Wanted = () => {

    const dispatch = useDispatch()
    const results= useSelector( (state) => state.wanted.results )

    useEffect(()=>{
        dispatch(fetchWantedPerson())
    },[])


    console.log(results)

    return (



        <div className="">

        
        {  results?.map((val,i) =>
            <div key={i} className="card">
                <img src={ val?.images[0].thumb } alt={ val?.title } />
                <div className="">{ val?.title }</div>
            </div>
        ) }




        </div>
    )

}



export default Wanted