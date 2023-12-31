import React from "react";
import { useState } from "react";
import Layout from "./Layout";
import Firm from "./Consumer_ferm";
import Indi from "./Individual";
import Navbar from "./Navbar";
import Address from "./Address";
import Connection from "./Connection";

const Form_main = () =>{
    const [display,setDisplay] = useState(6);

    const handleChange = (e) =>{
        setDisplay(e.target.value)
    }


    return(
        <div>
            <div className="container-md">
                <div class="d-flex p-2" id="heading" >Apply Online</div>
                
                    <div class="d-flex p-2">
                        <div className="container-sm">
                            <div class="d-flex p-2" id="head" >CONSUMER INFORMATION</div>
                            <form>
                                <div class="d-flex flex-column mb-3">
                                    <div class="p-2">
                                        <div class="col-md-3">
                                        <label for="Consumertype" class="form-label">Consumer type</label>
                                        <select value={display} class="form-select" id="Consumertype" onChange={handleChange} required>
                                        <option selected disabled value="">Select...</option>
                                        <option value={0}>Individual</option>
                                        <option value={1}>Firm/Trust/Company/Others</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please choose a Consumer type.
                                        </div>
                                        </div>
                                    </div>
                                    <div>
                                    {display==1?<Firm/>:<Indi/>} 
                                    </div>
                                </div>
                            </form>
                        </div>
                
                    </div>
                <Address/>
                <Connection/>
            {/* above here */}
            </div> 
        </div>
    );
}

export default Form_main;