import React, { useEffect, useState } from 'react'
import EasyEdit from 'react-easy-edit';


export function EditableText(props) {

  const [productName,setProductName]=useState()
  const [productId,setProductId]=useState()
  const [productItem,setProductItem]=useState()

  useEffect(()=>{
    setProductName(props.productName)
    setProductId(props.productId)
    setProductItem(props.productItem)
  },[])

  const save = (value) => { console.log(value) }
  const cancel = (value) => {console.log('edit price canceled ' ,value) }



  const onSave = (newValue) => {
    props.onSave({
      newValue,
      productName,
      productId,
      productItem
    })
  }

  return (
    <EasyEdit
      type="text"
      onSave={onSave}
      onCancel={cancel}
      hideSaveButton={true}
      hideCancelButton={true}
      value={props.value}
      // saveButtonLabel="Save Me"
      // saveButtonStyle='save'
      // saveButtonStyle='save'
      // cancelButtonLabel="Cancel Me"
      // cancelButtonStyle="save"
      // onBlur={()=>{}}
      attributes={{ name: "awesome-input", id: 1 }}
    />
  );
}