import React, {useState} from "react";
import Header from "../components/Header";
import TextEditor from "../components/TextEditor";
import Footer from "../components/Footer";



export default function Index() {
    
    const [editable, setEdit] = useState(true);
    
    return (
        <div>
            <Header/>
            <TextEditor editable={editable}/>
            <Footer/>
        </div>

    )
}