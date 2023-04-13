
import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { useStore } from "react-redux";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import TemplateOne from '../Templates/TemplateTwo';
import TemplateTwo from '../Templates/TemplateOne';
import './index.css'
import temp_one from "../../asserts/temp_one.png"
import temp_two from "../../asserts/temp_two.png"
const FileSaver = require('file-saver');  

function ResumePreview() {
    const store = useStore();
    const componentRef = React.useRef();
    const history = useHistory()
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    const [theam,setTheam] = React.useState('')
    const [activeTemplate,setActiveTemplate] = React.useState('one')
    const exportData =()=> {
        const filename = 'resume';
        const fileToSave = new Blob([JSON.stringify(store.getState())], {
            type: 'application/json'
        });
        FileSaver.saveAs(fileToSave, filename);
    }
    const handleReset = () => {
        history.push("/")
        window.location.reload()
        localStorage.clear()
      };
    
      const handleEdit = () => {
        history.push("/user-info")
      }
    return (
        <div className='main_cv_section'>
            <div className='reset_edit_section'>
            <Button className='cutome_btn' onClick={handleReset}>Reset</Button>
            <Button className='cutome_btn' onClick={handleEdit}>Edit</Button>
          </div>
            <div className='theam_section'>
                <span onClick={()=>setTheam('')} className={theam === '' ? "black_white_theam activeItem" : "black_white_theam" }></span>
                <span onClick={()=>setTheam('blue')} className={theam === 'blue' ? 'blue_theam activeItem' : 'blue_theam'}></span>
                <span onClick={()=>setTheam('purple')} className={theam === 'purple' ? 'purple_theam activeItem' : 'purple_theam'}></span>
                <span onClick={()=>setTheam('yellow')} className={theam === 'yellow' ? 'yellow_theam activeItem' : 'yellow_theam'}></span>
            </div>
            <div className='theam_section'>
                <span onClick={()=>setActiveTemplate('one')} className={activeTemplate === 'one' ? "temp_one activeItem" : "temp_one" }><img src={temp_two} height="100%" width="100%" /></span>
                <span onClick={()=>setActiveTemplate('two')} className={activeTemplate === 'two' ? 'temp_one activeItem' : 'temp_one'}><img src={temp_one} height="100%" width="100%" /></span>
            </div>
            <button className='print_btn' onClick={handlePrint}>DOWNLOAD CV</button>
            <button className='print_btn_json' onClick={exportData}>DOWNLOAD CV JSON</button>
            <div ref={componentRef} className='cv_content'>
              {activeTemplate === 'one' ?  <TemplateOne theam={theam} /> : <TemplateTwo theam={theam} />}
            </div>
        </div>
    )
}

export default ResumePreview;
