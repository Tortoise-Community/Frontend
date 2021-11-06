import React, {useState} from "react";
import Header from "../components/Header";
import TextEditor from "../components/TextEditor";
import Footer from "../components/Footer";



export default function Index() {
    return (
        <div>
            const [editable, setEdit] = useState(true);
            <Header/>
            <TextEditor editable={true}/>
            <Footer/>
        </div>

    )
}