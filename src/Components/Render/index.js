import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTextAsync } from '../../redux/textSlice';
function Render() {
      const dispatch = useDispatch();
      const isLoading = useSelector((state) => state.textG.isLoading);
      const error = useSelector((state) => state.textG.error);
      const items = useSelector((state) => state.textG.items);


      useEffect(()=>{
            dispatch(getTextAsync({textQuantity:4,includeHtml:"text"}));
      },[dispatch])

      //console.log(items);

      if(isLoading){
            return <div>Loading...</div>
      }
      if(error){
            return <div>Error {error}</div>
      }
  return (
      <div>
      <p>
       {items}
      </p>
    </div>
  )
}

export default Render