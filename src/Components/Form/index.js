import React from 'react';
import { useState} from 'react';
import { setFilter,getTextAsync } from '../../redux/textSlice';
import {useDispatch, useSelector} from 'react-redux';

function Form() {
      const dispatch = useDispatch();
      const textQuantity = useSelector((state) => state.textG.textQuantity);
      const includeHtml = useSelector((state) => state.textG.includeHtml);
      const [quantity, setQuantity] = useState(textQuantity);
      const [htmlinclude, setHtmlinclude] = useState(includeHtml);

      const handlechooser =async (takenparam) => {
            console.log(takenparam);
           // console.log(quantity);
            setQuantity(takenparam);
           await dispatch(setFilter({textQ:quantity,includeH:htmlinclude}));
           await dispatch(getTextAsync({textQuantity:takenparam,includeHtml:htmlinclude}));
      }
      const handlehtml =async (takenparam) => {
            console.log(takenparam);
            //console.log(htmlinclude);
            setHtmlinclude(takenparam);
            await dispatch(setFilter({textQ:quantity,includeH:htmlinclude}));
            await dispatch(getTextAsync({textQuantity:quantity,includeHtml:takenparam}));
      }
  return (
      <div className="row">
      <div className="col_md_3">
        paragraf
        <select name="paras" onChange={(e) => {handlechooser(e.target.value)}} style={{ width: "100px" }}>
          <option value={1} selected={quantity === 1 ? true:false}>1</option>
          <option value={2} selected={quantity === 2 ? true:false}>2</option>
          <option value={3} selected={quantity === 3 ? true:false}>3</option>
          <option value={4} selected={quantity === 4 ? true:false}>4</option>
          <option value={5} selected={quantity === 5 ? true:false}>5</option>
          <option value={6} selected={quantity === 6 ? true:false}>6</option>
          <option value={7} selected={quantity === 7 ? true:false}>7</option>
          <option value={8} selected={quantity === 8 ? true:false}>8</option>
          <option value={9} selected={quantity === 9 ? true:false}>9</option>
        </select>
      </div>
      <div className="col_md">
        include HTML
        <select name="html_i" onChange={(e) => {handlehtml(e.target.value)}}>
          <option value="text">text</option>
          <option value="html">html</option>
        </select>
      </div>
    </div>
  )
}

export default Form