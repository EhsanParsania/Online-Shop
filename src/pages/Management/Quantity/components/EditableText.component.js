import React from 'react'
import EasyEdit from 'react-easy-edit';


export function EditableText(props) {

  const save = (value) => {console.log(value)}
  const cancel = (value) => {console.log(value)}

  return (
    <EasyEdit
      type="text"
      onSave={save}
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
      attributes={{ name: "awesome-input", id: 1}}
    />
  );
}