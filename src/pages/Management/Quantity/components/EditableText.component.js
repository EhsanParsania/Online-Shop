import React, { useEffect, useState } from 'react'
import EasyEdit from 'react-easy-edit';


export function EditableText(props) {

  const [productGroup, setProductGroup] = useState()
  const [productId, setProductId] = useState()
  const [changedItem, setChangedItem] = useState()

  useEffect(() => {
    setProductGroup(props.productGroup)
    setProductId(props.productId)
    setChangedItem(props.changedItem)
  }, [])

  const save = (value) => { console.log('save called', value) }
  const cancel = (value) => { console.log('edit price canceled ', value) }



  const onSave = (newValue) => {

    props.onSave({
      newValue,
      productGroup,
      productId,
      changedItem
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