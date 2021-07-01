import { Component } from 'react'
import style from './UploadFile.module.scss'

class UploadFile extends Component {
  state = {

  }
  componentDidMount(){
    if(this.props.defaultValue){
      const defaultValue=this.props.defaultValue.slice(0,12)
      this.setState({fileName:defaultValue}) 
    }
  }
  handleChange = async (event) => {

    // let name = document.getElementById('input')
    const fileName = event.target.files.item(0).name 
    await this.setState({ fileName: fileName })
    const image = event.target.files[0]
    this.props.image(image)

  }
  render() {
    return (
      <section id='input-file-container' className={style.input_file_container}>
        <label className={style.input_file_label}>
          <span className={style.file_name} >{this.state.fileName}</span>
          <input id='input' onChange={this.handleChange} className={style.input_file} type="file" />
          <i className={style.upload_button}> انتخاب تصویر </i>
        </label>
      </section>
    )
  }
}

export { UploadFile }